import React, { FC } from 'react'
import {Weather} from '../Models/Weather';
import {WeatherEntry} from './WeatherEntry';
import {weatherLoc} from '../Models/WeatherLocation';
import { Grid, makeStyles, Typography } from '@material-ui/core';
interface weatherProps {
  weather: Weather | null;
  forecast: Weather[] | null ;
  location: weatherLoc | undefined
}
const useStyles = makeStyles({
  foreCastStyles : {
    fontStyle :'bold',
    margin : '12px',
    textAlign: 'center'
  },
  summaryTypoStyles : {
    marginTop :'10px',
    textAlign: 'center'
  },
  
})
export const WeatherSummaryProps:FC<weatherProps> = ({weather,forecast,location})=>{
  const classes = useStyles();
  if(!weather||!forecast||!location){
    return null;
  }
  return (
    <div>
      <Typography className = {classes.foreCastStyles} variant = 'h5'>{location.name} Current</Typography>
      <WeatherEntry weather = {weather}/>
      <h2 className = {classes.summaryTypoStyles}> { location.name } Forecast</h2>
      <Grid container direction = 'row' spacing = {2}>
      {forecast.map(d=>
        <Grid item sm = {12} md = {4}>
          <WeatherEntry weather = {d}/> 
        </Grid> 
      )}
      </Grid>
    </div>
  )
}