import React,{FC,useState,} from 'react'

interface LocationSearchProp {
  handleSearch : (val:string) => void;
}
export const LocationSearch: FC<LocationSearchProp> = ({handleSearch}) => {

  const [location,setLocation] = useState('');
  const disableSearch = location.trim() === '';

  const updateLocations = () => {
    handleSearch(location);
    setLocation('');
  }
  return (
    <div>
      <label>
          Add a location
          <input className = 'ml-1 mr-1' type = 'text' value = {location} onChange ={(e:any)=>setLocation(e.target.value)}/>
        </label>
        <button className = 'btn btn-primary' onClick = {updateLocations} disabled = {disableSearch}>Search for location</button>
    </div>
  )
}
