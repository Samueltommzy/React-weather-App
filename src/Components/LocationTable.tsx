import { Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core';
import { HighlightOffOutlined } from '@material-ui/icons';
import React, { FC } from 'react'
import {weatherLoc} from '../Models/WeatherLocation';
interface LocationTableProps {
  Locations : weatherLoc[];
  currentLocation : weatherLoc|undefined;
  onSelect : (loc:weatherLoc) => void;
}

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

const useStyles = makeStyles((themes)=>({
  listStyle :{
    fontStyle :'bold',
    margin : '12px'
  },
  tableStyles:{
    marginBottom: '9px'
  }
}))
export const  LocationTable:FC<LocationTableProps> = ({Locations,currentLocation,onSelect}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant = 'h5' className = {classes.listStyle} >
        Location List
      </Typography>
      <TableContainer component = {Paper} className = {classes.tableStyles}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell align="right">CurrentTemp(°C)</StyledTableCell>
              <StyledTableCell align="right">Feels Like(°C)</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Locations.map((loc,index)=> (
              <StyledTableRow className = 'table table-hover' key  ={index} onClick = {()=>onSelect(loc)}>
                <StyledTableCell component = 'th' scope ='row'>
                  {loc.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {Math.ceil(loc.main.temp)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {Math.ceil(loc.main.feels_like)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton>
                    <HighlightOffOutlined
                    />
                  </IconButton>  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
