import React, { FC } from 'react'
interface LocationTableProps {
  Locations : string[];
}
export const  LocationTable:FC<LocationTableProps> = ({Locations}) => {
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
              return <tr key = {index}>
              <td>
                {loc}
              </td>
            </tr>
            })}
             
          </tbody>
        </table>
    </div>
  )
}
