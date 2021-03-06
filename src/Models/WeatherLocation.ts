import {weatherData} from './Weather';
export interface coords {
  long: number;
  lat: number;
}

export interface weatherLoc {
  coord: coords;
  id: number;
  name: string;
  main: weatherData;
}