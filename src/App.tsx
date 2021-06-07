import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/WeatherSummary.css';
import {LocationSearch} from './Components/LocationSearch';
import {LocationTable} from './Components/LocationTable';
import {weatherLoc} from './Models/WeatherLocation';
import {searchLocation} from './Services/WeatherService';
import {WeatherSummaryProps} from './Components/WeatherSummary';
import {readWeatherData,readWeatherForecast} from './Services/WeatherService';
import {Weather} from './Models/Weather';
import { createMuiTheme, Grid, makeStyles, Paper, ThemeProvider} from '@material-ui/core';
import bkgroundImg from './weather.jpg';
import {Navbar} from './Components/Navbar';
import { lightBlue, teal } from '@material-ui/core/colors';
const useStyles  = makeStyles({
  root:{
    backgroundImage: `url(${bkgroundImg})`,
    minHeight: '100vh'
  }
});
const theme = createMuiTheme({
  palette :{
    primary: lightBlue
  }
})
function App() {
  const classes = useStyles();
  const [locationList,setLocationList] = useState<weatherLoc[]>([]);
  const [error,setError] = useState('');
  const [warning,setWarning] = useState('');
  const [currLocation,setCurrLocation] = useState<weatherLoc|undefined>(undefined);
  const [weatherEntry,setWeatherEntry] = useState<Weather|null>(null);
  const [weatherForecast,setWeatherForcast] = useState<Weather[]|null>(null);
  useEffect(() => {
    if(currLocation){
      readWeatherData(currLocation.id).then((res)=>{
        setWeatherEntry(res);
      });
      readWeatherForecast(currLocation.id).then((res)=>{
        setWeatherForcast(res);
      });
    }
  }, [currLocation]);

  const addLoc = async(loc:string) =>{
    setError('');
    setWarning('');
    const locationData = await searchLocation(loc);
    if(locationData === undefined){
      setError(`No location data found for ${loc}`);
    }
    else if(locationList.find(loc=>loc.id === locationData.id)){
      setWarning(`This location data already exists`);
    }
    else if(locationList.length >= 4){
      setWarning('You can only have a maximum of 4 Locations');
    }
    else{
      setLocationList([...locationList,locationData]);
    } 
  }

  return (
    <ThemeProvider theme = {theme}>
       <Paper className = {classes.root}>
      <Grid direction = 'column' container>
        <Grid item>
          <Navbar/>
        </Grid> 
        <Grid item container> 
          <Grid item sm = {2}/>
          <Grid item sm = {6}>
            <LocationSearch handleSearch = {addLoc}/>
              {
                error? <div className = {`alert alert-danger`}>{error}</div>
                : null
              }
              {
                warning ? <div className = {`alert alert-warning`}>{warning}</div>
                : null
              }
           <LocationTable Locations = {locationList} currentLocation = {currLocation} onSelect = {(location)=>setCurrLocation(location)}/>
           <WeatherSummaryProps weather = {weatherEntry} forecast = {weatherForecast} location = {currLocation}/>
          </Grid>
          <Grid item sm = {4}/>
        </Grid>
      </Grid>
    </Paper>
    </ThemeProvider>  
  );
}

export default App;
