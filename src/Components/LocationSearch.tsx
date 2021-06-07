import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { AccountCircleOutlined,LocationOn } from '@material-ui/icons';
import React,{FC,useState,} from 'react'

interface LocationSearchProp {
  handleSearch : (val:string) => void;
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const LocationSearch: FC<LocationSearchProp> = ({handleSearch}) => {
  const classes = useStyles();
  const [location,setLocation] = useState('');
  const disableSearch = location.trim() === '';

  const updateLocations = () => {
    handleSearch(location);
    setLocation('');
  }
  return (
    <div>
        <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LocationOn />
          </Grid>
          <Grid item>
            <TextField 
              id="input-with-icon-grid" 
              label="Location"
              value = {location} onChange ={(e:any)=>setLocation(e.target.value)}
            />
          </Grid>
          <Button 
            variant="contained" 
            color="primary" 
            disabled = {disableSearch}
            onClick = {updateLocations}
          >
            Add
          </Button>
        </Grid>
      </div>
    </div>
  )
}
