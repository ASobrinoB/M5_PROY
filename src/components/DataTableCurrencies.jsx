import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, TablePagination, Alert } from '@mui/material';
import useFetch from './useFetch';

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data1, loading1, error1 } = useFetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
  console.log (data1)
  const { data2, loading2, error2 } = useFetch('https://latest.currency-api.pages.dev/v1/currencies/clp.json')
  console.log (data2)
  const { data3, loading3, error3 } = useFetch('https://latest.currency-api.pages.dev/v1/currencies/usd.json')
  console.log (data3)
  const { data4, loading4, error4 } = useFetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json')
  console.log (data4)
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading1 || loading2 || loading3 || loading4) {
    return <CircularProgress />;
  }

  if (error1) {
    return <Alert severity="error">{error1.message}</Alert>
  }
  if (error2) {
    return <Alert severity="error">{error2.message}</Alert>
  }
  if (error3) {
    return <Alert severity="error">{error3.message}</Alert>
  }
  if (error4) {
    return <Alert severity="error">{error4.message}</Alert>
  }

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>Fecha
            <TableRow>
              <TableCell>Moneda</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Paridad a Peso Chileno</TableCell>
              <TableCell>Paridad a US Dolar</TableCell>
              <TableCell>Paridad a Euro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
{/*             {data1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
              </TableRow>
            ))}
 */}          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTableCurrencies;
