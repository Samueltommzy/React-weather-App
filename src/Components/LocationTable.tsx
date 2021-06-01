import React, { FC } from 'react'
import {weatherLoc} from '../Models/WeatherLocation';
interface LocationTableProps {
  Locations : weatherLoc[];
  currentLocation : weatherLoc|undefined;
  onSelect : (loc:weatherLoc) => void;
}
export const  LocationTable:FC<LocationTableProps> = ({Locations,currentLocation,onSelect}) => {
  return (
    <div>
       <h2>
          Locations
        </h2>
        <table className = 'table table-hover'>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {Locations.map((loc,index)=> {
              return <tr className = {currentLocation?.id === loc.id?'table-primary':''} key = {index} onClick = {()=>onSelect(loc)}>
              <td>
                {loc.name}
              </td>
            </tr>
            })}
             
          </tbody>
        </table>
    </div>
  )
}
