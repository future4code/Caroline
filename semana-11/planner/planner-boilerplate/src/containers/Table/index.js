import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/*
class WeekDays extends React.Component {
  constructor(props) {
      super(props)
      this.state = {      
    }
  }
  


render(props) {

return (
      <div>

        <List component="nav">
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
      </List>
    
  
      </div>
  )
}
}

export default (WeekDays);
*/


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell align="center">
                      <h2>  SEGUNDA </h2>
                     <List component="nav">
                      <ListItem button>
                         <ListItemText primary="task" />
                      </ListItem>
                  </List>
                  </CustomTableCell>
            <CustomTableCell align="center">
                      <h2>  TERÇA </h2>
                     <List component="nav">
                      <ListItem button>
                         <ListItemText primary="task" />
                      </ListItem>
                  </List>
            </CustomTableCell>
             
            <CustomTableCell align="center">
                    <h2>  QUARTA </h2>
                     <List component="nav">
                      <ListItem button>
                         <ListItemText primary="task" />
                      </ListItem>
                  </List>
            </CustomTableCell>
            <CustomTableCell align="center">
                      <h2>  QUINTA </h2>
                     <List component="nav">
                      <ListItem button>
                         <ListItemText primary="task" />
                      </ListItem>
                  </List>
            </CustomTableCell>
            <CustomTableCell align="center">
                    <h2>  SEXTA </h2>
                     <List component="nav">
                      <ListItem button>
                         <ListItemText primary="task" />
                      </ListItem>
                  </List>
            </CustomTableCell>
          </TableRow>
        </TableHead>

      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (CustomizedTable);
        /*<TableBody>
          <TableRow>
              <CustomTableCell align="center">T1</CustomTableCell>
              <CustomTableCell align="center">T2</CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
            </TableRow>
        </TableBody>*/