import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


const styles = {
  root: {
    width: 230,
  },
};

function TypographyMenu(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <MenuList>
	  <MenuItem>
          <ListItemIcon>
			<HomeIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap> Home </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <Typography variant="inherit">Cadastro</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <Typography variant="inherit">Add video</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography variant="inherit">Delete video</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
			<RotateRightIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Trocar senha </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

TypographyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyMenu);