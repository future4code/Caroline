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
import { connect } from 'react-redux';

const DoneIconGreen = styled(DoneIcon)({
    color: '#4caf50',
});  

const DeleteIconRed = styled(DeleteIcon)({
    color: '#d32f2f',
});  

  
  const InteractiveList= props => {
	
  
	return (
	    <Grid item xs={12} md={7}>
          <div >
            <List >
              {props.todos.map(todo => (
                <ListItem>
					<IconButton>
                   		<DoneIconGreen />
				   </IconButton>
                  <ListItemText
                    primary={todo.task}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIconRed />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
		);
}

const mapStateToProps = state => ({
	todos: state.todos.AllTodos
	});

	export default connect (mapStateToProps) (InteractiveList);