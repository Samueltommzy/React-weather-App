import { Avatar, Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';
import { grey, lightBlue, red } from '@material-ui/core/colors';
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
  avatar: {
    backgroundColor: grey[500],
  },
  card : {
    backgroundColor : lightBlue[500]
  }
}));
export const WeatherEntry:FC<weatherProps> = ({weather}) => {
  const classes = useStyles();
  if(!weather){
    return null;
  }
  
  return (
    
      <Card className = {classes.card}>
        <CardHeader
          avatar={
            <Avatar 
              aria-label="recipe" 
              className={classes.avatar}
              src = {getIconUrl(weather.weather[0].icon)}
            >    
            </Avatar>
          }
          title = {new Date(weather.dt *1000).toTimeString()}
        >
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{weather.main.temp}°C</strong>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{weather.weather[0].description}</strong>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
          Feels like: {Math.ceil(weather.main.feels_like)}°C
          </Typography>
        </CardContent>
      </Card>
  )
}
