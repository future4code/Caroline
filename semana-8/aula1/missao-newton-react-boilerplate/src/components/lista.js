import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';


/*export default function InteractiveList() {

	return (
		<Grid item xs={12} md={4}>
		<div >
		  <List >
			
			  <ListItem>
				<ListItemAvatar>
				  <Avatar>
					<WorkIcon />
				  </Avatar>
				</ListItemAvatar>
				<ListItemText  
				/>
				
				<ListItemSecondaryAction>
				  <IconButton edge="end" aria-label="delete">
					<DeleteIcon />
				  </IconButton>
				</ListItemSecondaryAction>
			  </ListItem>,
		
		  </List>
		</div>
	  </Grid>
  );
}*/

/*const useStyles = makeStyles(theme => ({
	root: {
	  flexGrow: 1,
	  maxWidth: 752,
	},
	demo: {
	  backgroundColor: theme.palette.background.paper,
	},
	title: {
	  margin: theme.spacing(4, 0, 2),
	},
  }));*/
  
  function generate(element) {
	return [0, 1, 2].map(value =>
	  React.cloneElement(element, {
		key: value,
	  }),
	);
  }
  
  export default function InteractiveList() {
	//const classes = useStyles();
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
  
	return (
	    <Grid item xs={12} md={5}>
          <div >
            <List >
              {generate(
                <ListItem>
                   <DoneIcon />
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
		);
}