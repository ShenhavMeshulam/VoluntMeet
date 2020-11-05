import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    width: '100%',
    height: '4rem',
  },
  toolbar: {
    padding: '0 20px'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">
          VoluntMeet
          </Typography>
        <AccessibilityNewIcon fontSize="large"/>
      </Toolbar>
    </AppBar>
  );
}