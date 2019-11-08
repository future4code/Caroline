import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


 export const login = (email, password) => async dispatch => {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/login",
        {
          email,
          password
        }
      );
      console.log(response)
      window.localStorage.SetItem ("token", response.data.token);
dispatch(push(routes.tripList));
    } catch (e) {
      console.log(e.message)
    }
 }


 