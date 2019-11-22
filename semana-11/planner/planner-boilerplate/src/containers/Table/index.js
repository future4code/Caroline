import React, {Component} from "react";
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
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import {getTasks} from '../../actions/allActions';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class CustomizedTable extends React.Component {
  componentDidMount(){
    this.props.getTasksAction();
  }
  constructor(props) {
      super(props)
      this.state = {      
    }
  }



render (props) {
  console.log(this.props.tasks)
  //verificando como filtrar ainda
  if (this.state.weekDay === Seg) {
    return
    { this.props.tasks.map((task) => { return(<p>{task.text}</p>) }) }
}

  return (
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">
              <h2>  SEGUNDA </h2>
                    <List >
                      
                        { this.props.tasks.map((task) => { return(<p>{task.text}</p>) }) }
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
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  getTasksAction: () => dispatch(getTasks()),

});


export default connect (mapStateToProps, mapDispatchToProps) (CustomizedTable);
        /*
        <h2>  SEGUNDA </h2>
                      <div>  { this.props.tasks.map((task) => { return(<p>{task.task}</p>) }) }</div>
                      <List >
                      { this.props.tasks.map((task) => { return(<li>{task.text}</li>) }) }
        
        <TableBody>
          <TableRow>
              <CustomTableCell align="center">T1</CustomTableCell>
              <CustomTableCell align="center">T2</CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
            </TableRow>
        </TableBody>*/