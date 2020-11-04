import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from "./Header";
import Menu from "./Menu";

import { EventPage } from './Pages/EventPage';
import { AddEvent } from './Pages/AddEvent/AddEvent';

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
  },
  addEvent: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  },
}));

export default () => {
  const classes = useStyles();
  const [sidenavOpen, setSidenavOpen] = React.useState(false);

  const handleSidenavClickButton = () => {
    setSidenavOpen(!sidenavOpen);
  }

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box className={classes.app}>
        <Header OnSidenavButtonClick={handleSidenavClickButton} />
        <div className={classes.contet}>
          <Menu isOpen={sidenavOpen} />
            <Switch>
              <Route exact path="/" component={EventPage} />
            </Switch>
            <Button className={classes.addEvent} variant="contained" color="primary" onClick={handleClickOpen}>
              Add Event
            </Button>
            <AddEvent open={open} handleClose={handleClose}/>
        </div>
      </Box>
    </Router>
  );
}