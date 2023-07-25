import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Row = (props) => {
  const { row, name, info, colorTable } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        {row.map((cell, cellIndex) => (
          <TableCell
            key={cellIndex}
            align="right"
            style={{
              backgroundColor: colorTable
                ? cell > 0
                  ? `rgba( 0, 139, 255, ${Math.abs(cell)})`
                  : `rgba(129, 25, 55, ${Math.abs(cell)})`
                : "white",
            }}
          >
            {cell.toFixed(2)}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                
              </Typography>
              <Typography variant="body1">{info}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const Table = () => {
  const [tableData, setTableData] = useState(null);
  const [colorTable, setColorTable] = useState(false);
  const [viewRawData,setViewRawData] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/data');
      const data = await response.json();
      setTableData(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchRawData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/raw-data');
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleColorClick = () => {
    setColorTable(!colorTable);
  };

  const handleToggleDataClick = () => {
    setViewRawData(!viewRawData);
    if(viewRawData) {
      fetchData();
    } else {
      fetchRawData();
    }
  };

  return (
    <Box className="main-content" >
      <button style={{float:'right'}}onClick={handleToggleDataClick} >Mostrar Datos Brutos</button>
      <button style={{float:'right'}}onClick={handleToggleColorClick} >Mapa de color</button>
      <TableContainer component={Paper}>
        <MuiTable aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              {tableData && tableData.columns && tableData.columns.map((column, columnIndex) => (
                <TableCell key={columnIndex} align="right">{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.data && tableData.data.map((row, rowIndex) => (
              <Row key={rowIndex} row={row} name={tableData.index[rowIndex]} info={tableData.info[tableData.index[rowIndex]]} colorTable={colorTable} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};

export default Table;
