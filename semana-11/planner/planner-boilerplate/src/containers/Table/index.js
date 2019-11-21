import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
            <CustomTableCell align="center">SEGUNDA</CustomTableCell>
            <CustomTableCell align="center">TERÇA</CustomTableCell>
            <CustomTableCell align="center">QUARTA</CustomTableCell>
            <CustomTableCell align="center">QUINTA</CustomTableCell>
            <CustomTableCell align="center">SEXTA</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              <CustomTableCell align="center">T1</CustomTableCell>
              <CustomTableCell align="center">T2</CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (CustomizedTable);