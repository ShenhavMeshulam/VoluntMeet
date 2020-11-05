import React, { useState, useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EventDialog from '../VolunteersPage/volunteer-dialog';

import { EventPreview } from './EventPreview';
import ReactSearchBox from 'react-search-box'
import { AddEventButton } from '../AddEventButton';
import { useEvent } from '../../../hooks';

const useStyles = makeStyles(theme => ({
  eventList: {
    padding: theme.spacing(2),
    width: '100%'
  },
  div: {
    width: '100%'
  },
  searchBox: {
    display: 'flex'
  },
  addButton: {
    justifyContent: 'center',
    width: '100%',
    paddingTop: '20px'
  },
  addButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  },
  searchInput: {
    width: '800px',
    margin: 'auto',
    marginTop: theme.spacing(2)
  },
  eventPreview: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}));

export const EventPage = () => {
  const classes = useStyles();
  const [selectedEvent, setSelectedEvent] = useState();
  const [events, setEvents] = useState([]);
  const { create, getAll } = useEvent();

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
  }

  const handleCloseDialog = () => {
    setSelectedEvent();
  }

  const handleSearchOnChange = (data) => {
    setEvents(eventsSeed.filter(x => x.title.toLocaleLowerCase().includes(data) ||
      x.description.includes(data) || x.location.includes(data) ||
      x.tags.find(x => x.includes(data)) || x.creator.name.includes(data)))//| )
  }

  const createEvent = ({ date, time, ...event }) => {
    const entity = { ...event, date: `${date} ${time}` };

    console.log('create');

    return create(entity)
      .then(newEntity => setEvents(x => [...x, newEntity]));
  }

  useMemo(() => {
    getAll()
      .then(x => setEvents(x))
  }, []);

  return (
    <div className={classes.div}>
      <div className={classes.searchBox}>
        <div className={classes.searchInput}>
          <ReactSearchBox
            placeholder="Search"
            onChange={handleSearchOnChange}
            inputBoxBorderColor={'black'}
          />
        </div>
      </div>
      <Grid container spacing={2} className={classes.eventList}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <EventPreview key={index} className={classes.eventPreview} event={event} handleDialogOpen={() => handleOpenDialog(event)} />
          </Grid>
        ))}
        <EventDialog event={selectedEvent} isOpen={!!selectedEvent} handleClose={handleCloseDialog} />
      </Grid>
      <AddEventButton className={classes.addButton} onAdd={createEvent} />
    </div>
  )
};