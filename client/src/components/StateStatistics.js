import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Typography } from '@mui/material';

const StateStatisticsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rows = [
    { state: 'Arizona', rep: "48.10", dem: "51.90", white: "58.06", black: "4.27", asian: "3.60", hispanic: "26.90" },
    { state: 'South Carolina', rep: "55.40", dem: "44.60", white: "64.86", black: "24.03", asian: "1.75", hispanic: "5.76"},
    { state: 'Texas', rep: "53.00", dem: "47.00", white: "43.23", black: "11.79", asian: "5.54", hispanic: "36.04"},
  ];

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden', margin:'5%'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell align="center">% Rep.</TableCell>
              <TableCell align="center">% Dem.</TableCell>
              <TableCell align="center">% White.</TableCell>
              <TableCell align="center">% Black.</TableCell>
              <TableCell align="center">% Asian.</TableCell>
              <TableCell align="center">% Hispanic.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.state}>
                <TableCell component="th" scope="row">
                  {row.state}
                </TableCell>
                <TableCell align="center">{row.rep}</TableCell>
                <TableCell align="center">{row.dem}</TableCell>
                <TableCell align="center">{row.white}</TableCell>
                <TableCell align="center">{row.black}</TableCell>
                <TableCell align="center">{row.asian}</TableCell>
                <TableCell align="center">{row.hispanic}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StateStatisticsTable;
