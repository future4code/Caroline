import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
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


export const TodoList = props => {

	const handleComplete = () => {
		props.onComplete(props.todo.id);
	  };
	
	  const handleDelete = () => {
		props.onDelete(props.todo.id);
	  };

	const completionIcon = props.todo.done ? (
		<IconButton >
			<DoneIconGreen />
		</IconButton>
	) : ("  ")

	return(
<ListItem button onClick={handleComplete} >
		{completionIcon}
	<ListItemText
		primary={props.task}
	/>
	<ListItemSecondaryAction>
		<IconButton edge="end" aria-label="delete" onClick={handleDelete}>
		<DeleteIconRed
		/>
	</IconButton>
	</ListItemSecondaryAction>
</ListItem>
	)
}

/*	<IconButton onClick = {props.onComplete}>
		<DoneIconGreen />
	</IconButton>*/