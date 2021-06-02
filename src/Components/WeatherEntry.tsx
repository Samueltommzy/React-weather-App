import React, { FC } from 'react'
import {Weather} from '../Models/Weather';
import {getIconUrl} from '../Services/WeatherService';

interface weatherProps {
  weather: Weather | null;
}
export const WeatherEntry:FC<weatherProps> = ({weather}) => {
  if(!weather){
    return null;
  }
  
  return (
    <div>
      {new Date(weather.dt *1000).toTimeString()}
      <div>
      <strong>{weather.main.temp}°C</strong>
      <div>({weather.main.temp_min}°C/{weather.main.temp_max}°C)</div>
      </div>
      <div>Humidity: {weather.main.humidity}%</div>
      {
        weather.weather.map(d=><div key = {d.id}>
          <img src = {getIconUrl(d.icon)} alt = {d.main}/>
          {d.main} {d.description}
        </div>)
      }
      <div>Feels like: {weather.main.feels_like}°C</div>  
    </div>
  )
}
