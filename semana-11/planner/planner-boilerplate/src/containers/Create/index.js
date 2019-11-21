import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class CreateTask extends React.Component {
    state = {
    };
  


render() {
    const { classes } = this.props;

    return (
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    margin="normal"
                    variant="outlined"
                />

            </div>
        )
    }
}
export default (CreateTask);