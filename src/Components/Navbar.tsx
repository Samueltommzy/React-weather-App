import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typographyStyles:{
    color: 'white',
    flexGrow: 1
  }
}));

export const Navbar:FC = () => {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
      <AppBar position = 'static'>
        <Toolbar>
          <Typography variant='h6' className = {classes.typographyStyles} >My Weather</Typography>
        </Toolbar>
      </AppBar>
    </div>    
  )
}
