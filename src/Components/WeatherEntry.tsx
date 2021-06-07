import { Avatar, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react'
import {Weather} from '../Models/Weather';
import {getIconUrl} from '../Services/WeatherService';

interface weatherProps {
  weather: Weather | null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
export const WeatherEntry:FC<weatherProps> = ({weather}) => {
  const classes = useStyles();
  if(!weather){
    return null;
  }
  
  return (
    <Card>
      <CardHeader
        avatar = {(
          weather.weather.map(d=>{
            <Avatar
              aria-label="recipe" 
              src = {getIconUrl(d.icon)}
              alt = {d.main}
            >
            </Avatar>
          }))
        }
        title = {new Date(weather.dt *1000).toTimeString()}
      >
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>{weather.main.temp}°C</strong>
        </Typography>
      </CardContent>
    </Card>
    // <div>
    //   {new Date(weather.dt *1000).toTimeString()}
    //   <div>
    //   <strong>{weather.main.temp}°C</strong>
    //   <div>({weather.main.temp_min}°C/{weather.main.temp_max}°C)</div>
    //   </div>
    //   <div>Humidity: {weather.main.humidity}%</div>
    //   {
    //     weather.weather.map(d=><div key = {d.id}>
    //       <img src = {getIconUrl(d.icon)} alt = {d.main}/>
    //       {d.main} {d.description}
    //     </div>)
    //   }
    //   <div>Feels like: {weather.main.feels_like}°C</div>  
    // </div>
  )
}
