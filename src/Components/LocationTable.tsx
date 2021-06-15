import { IconButton, makeStyles, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core';
import { HighlightOffOutlined,Visibility } from '@material-ui/icons';
import React, { FC } from 'react'
import {weatherLoc} from '../Models/WeatherLocation';
interface LocationTableProps {
  Locations : weatherLoc[];
  currentLocation : weatherLoc|undefined;
  onSelect : (loc:weatherLoc) => void;
  onRemove : (loc:string) => void;
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    marginLeft: 20
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // '&:nth-of-type(even)': {
    //   backgroundColor: theme.palette.action.active,
    // },
  },
}))(TableRow);
const StyledTableHeader = withStyles((theme)=>({
  root:{

    padding: 'none'
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.primary.light
  }
}))(TableHead)
const useStyles = makeStyles((themes)=>({
  listStyle :{
    fontStyle :'bold',
    margin : '12px'
  },
  tableStyles:{
    marginBottom: '9px'
  },
}))
export const  LocationTable:FC<LocationTableProps> = ({Locations,currentLocation,onSelect,onRemove}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant = 'h5' className = {classes.listStyle} >
        Location List
      </Typography>
      <TableContainer component = {Paper} className = {classes.tableStyles}>
        <Table aria-label="customized table">
          <StyledTableHeader>
            <TableRow>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell align="center">Current Temp(°C)</StyledTableCell>
              <StyledTableCell align="center" >Feels Like(°C)</StyledTableCell>
              <StyledTableCell  padding = 'none' ></StyledTableCell>
              <StyledTableCell  padding = 'none' ></StyledTableCell>
            </TableRow>
          </StyledTableHeader>
          <TableBody>
            {Locations.map((loc,index)=> (
              <StyledTableRow  key  ={index} hover>
                <StyledTableCell component = 'th' scope ='row'>
                  {loc.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Math.ceil(loc.main.temp)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Math.ceil(loc.main.feels_like)}
                </StyledTableCell>
                <StyledTableCell  padding = 'none' >
                  <MenuItem disableGutters onClick = {()=>onRemove(loc.name)}>
                    <IconButton>
                      <HighlightOffOutlined
                      />  
                    </IconButton> 
                  </MenuItem> 
                </StyledTableCell>
                <StyledTableCell  padding = 'none' >
                  <MenuItem disableGutters onClick = {()=>onSelect(loc)} style = {{marginLeft:'0px'}}>
                    <IconButton>
                      <Visibility
                      />  
                    </IconButton> 
                  </MenuItem> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
