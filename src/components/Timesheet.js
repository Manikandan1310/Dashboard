import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Landingpage Design', "May 21,2021", "1:10pm", "12:10am", "8:10:37"),
  createData('Mobile App', "May 21,2021", "1:10pm", "12:10am", "8:10:37"),
  createData('UI/UX', "May 21,2021", "1:10pm", "12:10am", "8:10:37"),
  createData('Webistes/apps', "May 21,2021", "1:10pm", "12:10am", "8:10:37"),
  createData('Branding', "May 21,2021", "1:10pm", "12:10am", "8:10:37"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: 10
  },
});

export default function Timesheet() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className="Table-main" style={{ width: "1px !important" }}>
      <Table className={classes.table} aria-label="customized table">

        <TableHead className="WithStyles\(ForwardRef\(TableCell\)\)-head-12">
          <TableRow>
            <StyledTableCell align="inherit">Project</StyledTableCell>
            <StyledTableCell align="inherit">Date</StyledTableCell>
            <StyledTableCell align="=inherit">Start time</StyledTableCell>
            <StyledTableCell align="inherit">Stop Time</StyledTableCell>
            <StyledTableCell align="inherit">Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="WithStyles\(ForwardRef\(TableCell\)\)-body-13">
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="inherit" >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="inherit">{row.calories}</StyledTableCell>

              <StyledTableCell align="inherit">{row.fat}</StyledTableCell>
              <StyledTableCell align="inherit">{row.carbs}</StyledTableCell>
              <StyledTableCell align="inherit">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}



