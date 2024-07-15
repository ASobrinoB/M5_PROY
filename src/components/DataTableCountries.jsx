import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, TablePagination, Alert } from '@mui/material';
import useFetch from './useFetch';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const DataTableCountries = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  // Filtrar los países según el término de búsqueda
  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper>
      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
        <TextField id="outlined-helperText" label="Buscar país" defaultValue="" helperText="Puede ingresar parte del texto" value={searchTerm} onChange={handleSearchChange}/>
      </Box> 

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>País</TableCell>
              <TableCell>Bandera</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Moneda</TableCell>
              <TableCell>Idiomas</TableCell>
              <TableCell>Latitud<br />Longitud</TableCell>
              <TableCell>Número de<br />Habitantes</TableCell>
              <TableCell>Zona<br />Horaria</TableCell>
              <TableCell>Continente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCountries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((country) => (
                <TableRow key={country.cca3}>
                  <TableCell>{country.name.common}</TableCell>
                  <TableCell>
                    <img src={country.flags?.svg} alt="Bandera" style={{ width: '50px', height: 'auto' }} />
                  </TableCell>
                  <TableCell>{country.capital ? country.capital[0] : 'Sin Info.'}</TableCell>
                  <TableCell>
                    {country.currencies && Object.keys(country.currencies).length > 0 ? (Object.keys(country.currencies).map((code) => (
                        <span key={code}>{code}<br />{country.currencies[code].name}</span>
                      ))) : ('Sin Info.')}
                  </TableCell>
                  <TableCell>
                    {country.languages && Object.keys(country.languages).length > 0 ? (Object.values(country.languages).join(', ')) : ('Sin Info.')}
                  </TableCell>
                  <TableCell>{country.latlng[0]}<br />{country.latlng[1]}</TableCell>
                  <TableCell>{country.population.toLocaleString()}</TableCell>
                  <TableCell>{country.timezones ? country.timezones[0] : 'Sin Info.'}</TableCell>
                  <TableCell>{country.continents[0]}</TableCell>
                </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredCountries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTableCountries;
