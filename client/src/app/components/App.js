import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from "./Header";

import { EventPage } from './Pages/EventPage';
import theme from "../theme";
import {MuiThemeProvider} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  contet: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  page: {
    margin: '16px',
    width: '100%',
  }
}));

export default () => {
  const classes = useStyles();

  return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Box className={classes.app}>
            <Header />
            <div className={classes.contet}>
          <Switch>
            <Route exact path="/" component={EventPage} />
          </Switch>
            </div>
          </Box>
        </Router>
      </MuiThemeProvider>
  );
}