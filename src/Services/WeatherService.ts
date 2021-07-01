import {weatherLoc} from '../Models/WeatherLocation';
import {Weather} from '../Models/Weather';

const apiKey:string = process.env.REACT_APP_API_KEY as string;
const apiUrl = 'https://api.openweathermap.org/data/2.5';
console.log(apiKey)
// if(apiKey === undefined){
//   throw new Error('API key not found');
// }

export async function searchLocation(loc:string):Promise<weatherLoc|undefined> {
  const res = await fetch(`${apiUrl}/weather?q=${loc}&appId=${apiKey}&units=metric`);
  switch(res.status) {
    case 200:
      return await res.json();
    default:
      return undefined
  }
}

export async function readWeatherData(locId:number): Promise<Weather|null> {
  const res = await fetch(`${apiUrl}/weather?id=${locId}&appId=${apiKey}&units=metric`);
  switch(res.status){
    case 200:
      return res.json();
    default:
      return null;
  }
}

export async function readWeatherForecast(locId:number):Promise<Weather[]|null>{
  const res = await fetch(`${apiUrl}/forecast?id=${locId}&appId=${apiKey}&units=metric&cnt=8`);
  switch(res.status){
    case 200:
      return (await res.json()).list;
    default:
      return null;
  }
}

export function getIconUrl(iconId:string):string{
  return `https://openweathermap.org/img/wn/${iconId}.png`;
}

