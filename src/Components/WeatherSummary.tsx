import React, { FC } from 'react'
import {Weather} from '../Models/Weather';
import {WeatherEntry} from './WeatherEntry';
import {weatherLoc} from '../Models/WeatherLocation';
import { makeStyles, Typography } from '@material-ui/core';
interface weatherProps {
  weather: Weather | null;
  forecast: Weather[] | null ;
  location: weatherLoc | undefined
}
const useStyles = makeStyles({
  foreCastStyles : {
    fontStyle :'bold',
    margin : '12px'
  }
})
export const WeatherSummaryProps:FC<weatherProps> = ({weather,forecast,location})=>{
  const classes = useStyles();
  if(!weather||!forecast||!location){
    return null;
  }
  return (
    <div>
      <Typography className = {classes.foreCastStyles} variant = 'h5'>{location.name}</Typography>
      <WeatherEntry weather = {weather}/>
      <h2>Forcast</h2>
      <div>
        <ol>
          {forecast.map(d=>
          <li key = {d.dt}>
            <WeatherEntry weather = {d}/>
          </li>
            )}
        </ol>
      </div>
    </div>
  )
}