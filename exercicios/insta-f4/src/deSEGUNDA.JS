import React from 'react';
import { InstaF4 } from './componentes/card.js';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(){
        super();
        this.state =  {
            allTask: [],
            currentTask: ""
        };
    }
}

onChageCurrentTask = event => {
    this.setState ({currentTask: event.target.value});
}

render () {
    return (
        <div>
            <input type="text" value={this.state.currentTask}/>
            <button></button>
        </div>
    )
}