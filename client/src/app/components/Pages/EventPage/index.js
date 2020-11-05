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
      {/* <img src="https://hospitals.clalit.co.il/shalvata/he/about_us/PublishingImages/Article/shutterstock_324632651%D7%94%D7%AA%D7%A0%D7%93%D7%91%D7%95%D7%AA.jpg" alt="x" width="100%" height="300"></img> */}
      <img src="https://www.jerusalem.muni.il/media/11780/education_b_06.png" alt="x" width="100%" height="400"></img>
      {/* <img src="https://images.globes.co.il/images/NewGlobes/big_image_800/2019/F9849A6B17CDFCA053B13FA038BA269F_800x392.20190814T175815.jpg" alt="x" width="100%" height="400"></img> */}
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
            <EventPreview key={index} event={event} handleDialogOpen={() => handleOpenDialog(event)} />
          </Grid>
        ))}
        <EventDialog event={selectedEvent} isOpen={!!selectedEvent} handleClose={handleCloseDialog} />
      </Grid>
      <AddEventButton className={classes.addButton} onAdd={createEvent} />
    </div>
  )
};