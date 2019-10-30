import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import styled from "styled-components";

const DoneIconGreen = styled(DoneIcon)({
    color: '#4caf50',
});  

const DeleteIconRed = styled(DeleteIcon)({
    color: '#d32f2f',
});  

  
  function generate(element) {
	return [0, 1, 2].map(value =>
	  React.cloneElement(element, {
		key: value,
	  }),
	);
  }
  
  export default class InteractiveList extends React.Component {
	state = {
	  dense: false,
	  secondary: false,
	};
  
	render() {
	  const { classes } = this.props;
	  const { dense, secondary } = this.state;
  
	return (
	    <Grid item xs={12} md={7}>
          <div >
            <List >
              {generate(
                <ListItem>
                   <DoneIconGreen />
                  <ListItemText
                    primary="Tarefa"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIconRed />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
		);
}}