import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


export const createSignUp = (name, email, password_) => async dispatch => {
  try {
    const response = await axios.post(
      "https://us-central1-futuretube-app.cloudfunctions.net/FTapi/signup",
      {
        name: name,
     	email: email,
     	password_ : password_
      }
	);
	dispatch(push(routes.home));
  } catch (e) {

  }
}
