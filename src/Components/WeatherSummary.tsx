import React, { FC } from 'react'
import {Weather} from '../Models/Weather';
import {WeatherEntry} from './WeatherEntry';
import {weatherLoc} from '../Models/WeatherLocation';
interface weatherProps {
  weather: Weather | null;
  forecast: Weather[] | null ;
  location: weatherLoc | undefined
}

export const WeatherSummaryProps:FC<weatherProps> = ({weather,forecast,location})=>{
  if(!weather||!forecast||!location){
    return null;
  }
  return (
    <div>
      <h2>{location.name}</h2>
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