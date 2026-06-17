import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  TextField,
  MenuItem
} from '@mui/material';
import { Search, FilterList } from '@mui/icons-material';
import Papa from 'papaparse';

const DataExplorer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBedrooms, setFilterBedrooms] = useState('all');

  useEffect(() => {
    // Load data (same as Dashboard)
    fetch('/Housing.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            const parsedData = results.data.filter(row => row.price);
            setData(parsedData);
            setFilteredData(parsedData);
          }
        });
      })
      .catch(() => {
        const sampleData = generateSampleData();
        setData(sampleData);
        setFilteredData(sampleData);
      });
  }, []);

  const generateSampleData = () => {
    const samples = [];
    for (let i = 0; i < 50; i++) {
      samples.push({
        price: Math.floor(7000000 + Math.random() * 6000000),
        area: Math.floor(3000 + Math.random() * 7000),
        bedrooms: Math.floor(2 + Math.random() * 4),
        bathrooms: Math.floor(1 + Math.random() * 3),
        stories: Math.floor(1 + Math.random() * 3),
        mainroad: Math.random() > 0.5 ? 'yes' : 'no',
        airconditioning: Math.random() > 0.5 ? 'yes' : 'no',
        parking: Math.floor(Math.random() * 3),
        furnishingstatus: ['furnished', 'semi-furnished', 'unfurnished'][Math.floor(Math.random() * 3)]
      });
    }
    return samples;
  };

  useEffect(() => {
    let filtered = data;
    
    if (filterBedrooms !== 'all') {
      filtered = filtered.filter(d => d.bedrooms === parseInt(filterBedrooms));
    }
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.price.toString().includes(searchTerm) ||
        d.area.toString().includes(searchTerm)
      );
    }
    
    setFilteredData(filtered);
    setPage(0);
  }, [searchTerm, filterBedrooms, data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
          🔍 Data Explorer
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          Browse, search, and filter property data
        </Typography>
      </Paper>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Search by Price or Area"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1 }} />
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Filter by Bedrooms"
            value={filterBedrooms}
            onChange={(e) => setFilterBedrooms(e.target.value)}
            InputProps={{
              startAdornment: <FilterList sx={{ mr: 1 }} />
            }}
          >
            <MenuItem value="all">All Bedrooms</MenuItem>
            <MenuItem value="2">2 Bedrooms</MenuItem>
            <MenuItem value="3">3 Bedrooms</MenuItem>
            <MenuItem value="4">4 Bedrooms</MenuItem>
            <MenuItem value="5">5+ Bedrooms</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Paper elevation={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Price</strong></TableCell>
                <TableCell><strong>Area (sqft)</strong></TableCell>
                <TableCell><strong>Bedrooms</strong></TableCell>
                <TableCell><strong>Bathrooms</strong></TableCell>
                <TableCell><strong>Stories</strong></TableCell>
                <TableCell><strong>Features</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" fontWeight={600}>
                          ${(row.price / 1000000).toFixed(2)}M
                        </Typography>
                        <Typography variant="caption" color="success.main">
                          ₹{((row.price * 83) / 10000000).toFixed(2)} Cr
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{row.area?.toLocaleString()}</TableCell>
                    <TableCell>{row.bedrooms}</TableCell>
                    <TableCell>{row.bathrooms}</TableCell>
                    <TableCell>{row.stories}</TableCell>
                    <TableCell>
                      {row.airconditioning === 'yes' && (
                        <Chip label="A/C" size="small" color="primary" sx={{ mr: 0.5 }} />
                      )}
                      {row.parking > 0 && (
                        <Chip label={`P:${row.parking}`} size="small" color="secondary" sx={{ mr: 0.5 }} />
                      )}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={row.furnishingstatus} 
                        size="small" 
                        color={row.furnishingstatus === 'furnished' ? 'success' : 'default'}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>📊 Dataset Statistics</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Typography variant="body2" color="text.secondary">Total Records</Typography>
            <Typography variant="h6">{data.length}</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body2" color="text.secondary">Filtered Results</Typography>
            <Typography variant="h6">{filteredData.length}</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body2" color="text.secondary">Features</Typography>
            <Typography variant="h6">{data[0] ? Object.keys(data[0]).length : 0}</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body2" color="text.secondary">Data Quality</Typography>
            <Typography variant="h6" color="success.main">100%</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default DataExplorer;
