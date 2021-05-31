import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {LocationSearch} from './Components/LocationSearch';
import {LocationTable} from './Components/LocationTable';
function App() {
  const [locationList,setLocationList] = useState<string[]>([]);
  const addLoc = (loc:string) =>{
    setLocationList([...locationList,loc]);
  }
  return (
    <div className = 'container'>
      <h1>Weather Application</h1>
      <LocationSearch handleSearch = {addLoc}/>
      <LocationTable Locations = {locationList}/>
    </div>
  );
}

export default App;
