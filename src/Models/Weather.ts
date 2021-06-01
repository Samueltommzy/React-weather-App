export interface weatherDescriptions {
  main: string;
  icon: string;
  id: number;
  description: string;
}

export interface weatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Weather {
  weather: weatherDescriptions[];
  main: weatherData;
  dt: number;
}