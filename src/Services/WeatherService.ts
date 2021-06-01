import {weatherLoc} from '../Models/WeatherLocation';
import {Weather} from '../Models/Weather';

const apiKey:string = process.env.REACT_APP_API_KEY as string;
const apiUrl = 'http://api.openweathermap.org/data/2.5';
console.log(apiKey)
// if(apiKey === undefined){
//   throw new Error('API key not found');
// }

export async function searchLocation(loc:string):Promise<weatherLoc|undefined> {
  const res = await fetch(`${apiUrl}/weather?q=${loc}&appId=${apiKey}`);
  switch(res.status) {
    case 200:
      return await res.json();
    default:
      return undefined
  }
}

export async function readWeatherData(locId:number): Promise<Weather|undefined> {
  const res = await fetch(`${apiUrl}/weather?id=${locId}&appId=${apiKey}&units=metric`)
  switch(res.status){
    case 200:
      return res.json();
    default:
      return undefined;
  }
}

export function getIconUrl(iconId:string):string{
  return `http://openweathermap.org/img/wn/${iconId}.png`;
}

