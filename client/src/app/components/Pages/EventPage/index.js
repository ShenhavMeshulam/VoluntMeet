import React, {useState, useMemo} from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EventDialog from '../VolunteersPage/volunteer-dialog';

import { EventPreview } from './EventPreview';
import ReactSearchBox from 'react-search-box'
import { AddEventButton } from '../AddEventButton';
import {useEvent} from '../../../hooks';

const useStyles = makeStyles(theme => ({
  eventList: {
    padding: theme.spacing(2)
  },
  searchBox: {
    width: '600px'
  },
  addButton: {
    postion: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  addButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  },
}));

export const EventPage = () => {
  const classes = useStyles();
  const [selectedEvent, setSelectedEvent] = useState();
  const [events, setEvents] = useState([]);
  const {create, getAll} = useEvent();

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
  }

  const handleCloseDialog = () => {
    setSelectedEvent();
  }

  const handleSearchOnChange = (data) => {
    setEvents(eventsSeed.filter(x => x.title.includes(data) || x.description.includes(data) || x.location.includes(data) || x.tags.find(x => x.includes(data)) || x.creator.name.includes(data)))//| )
  }

  const createEvent = ({date, time, ...event}) => {
    const entity = {...event, date: `${date} ${time}`};

    console.log('create');

    return create(entity)
      .then(newEntity => setEvents(x => [...x, newEntity]));
  }

  useMemo(() => {
    getAll()
      .then(x => setEvents(x))
  }, []);

  return (
    <div>
      <div className={classes.searchBox}>
        <ReactSearchBox
          placeholder="Search"
          onChange={handleSearchOnChange}
        />
      </div>
      <Grid container spacing={2} className={classes.eventList}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} lg={4}>
            <EventPreview key={index} event={event} handleDialogOpen={() => handleOpenDialog(event)} />
          </Grid>
        ))}
        <EventDialog event={selectedEvent} isOpen={!!selectedEvent} handleClose={handleCloseDialog} />
      </Grid>
      <AddEventButton className={classes.addButton} onAdd={createEvent} />
    </div>
  )
};