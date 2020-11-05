import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    width: '100%',
    height: '4rem',
  },
  toolbar: {
    padding: '0px'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          VoluntMeet
          </Typography>
      </Toolbar>
    </AppBar>
  );
}