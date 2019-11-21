import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },

  });
    class CreateTask extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                valueTask : ""
            }
        }
        


    onChangeValue = (event) => {
        this.setState({
            valueTask: event.target.value
        });
    };

render(props) {
   
    return (
            <div>
                <TextField
                    label="Multiline"
                    multiline
                    rows="4"
                    variant="outlined"
                    value={this.state.valueTask}
                    onChange={this.onChangeValue}
                />
                 <Button variant="contained" color="primary">
                   Criar Tarefa!
                </Button>
            </div>
        )
    }
}

export default (CreateTask);