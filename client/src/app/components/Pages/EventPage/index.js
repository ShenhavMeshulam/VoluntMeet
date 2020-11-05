import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import EventDialog from '../VolunteersPage/volunteer-dialog';

import { EventPreview } from './EventPreview';
import ReactSearchBox from 'react-search-box'

const useStyles = makeStyles(theme => ({
  eventList: {
    padding: theme.spacing(2)
  },
  searchBox: {
    width: '600px'
  }
}));

const eventsSeed = [
  {
    title: 'X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, nisi id consequat lacinia, risus urna facilisis quam, vitae venenatis urna velit et nisl. Morbi id nibh non augue accumsan vulputate at et mi. Etiam hendrerit, purus dignissim placerat iaculis, ligula risus ornare leo, nec vulputate lectus lectus in nisl. Aenean sodales euismod tortor sed posuere. Mauris dignissim tempus odio, a porttitor lacus efficitur ut. Cras eget auctor velit. Nullam lacinia tempus scelerisque. Donec efficitur odio a felis convallis, lacinia pretium erat molestie. Sed convallis eros a lorem eleifend, eget gravida felis porttitor. Morbi efficitur rutrum turpis.',
    location: 'Rishon Letzion',
    date: new Date('16:00 11/10/2020'),
    tags: ['Engineering', 'Development'],
    minimunPeople: 10,
    maxPeople: 100,
    arrivingAmount: 50,
    creator: {
      name: 'Yuval Shlefer',
      phoneNumber: '0546976974'
    },
    image: '',
    comments: ['great', 'success'],
    likes: 50
  },
  {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, nisi id consequat lacinia, risus urna facilisis quam, vitae venenatis urna velit et nisl. Morbi id nibh non augue accumsan vulputate at et mi. Etiam hendrerit, purus dignissim placerat iaculis, ligula risus ornare leo, nec vulputate lectus lectus in nisl. Aenean sodales euismod tortor sed posuere. Mauris dignissim tempus odio, a porttitor lacus efficitur ut. Cras eget auctor velit. Nullam lacinia tempus scelerisque. Donec efficitur odio a felis convallis, lacinia pretium erat molestie. Sed convallis eros a lorem eleifend, eget gravida felis porttitor. Morbi efficitur rutrum turpis.',
    location: 'Rishon Letzion',
    date: new Date('16:00 11/10/2020'),
    tags: ['Engineering', 'Development'],
    minimunPeople: 10,
    maxPeople: 100,
    arrivingAmount: 50,
    creator: {
      name: 'Yuval Shlefer',
      phoneNumber: '0546976974'
    },
    image: '',
    comments: ['great', 'success'],
    likes: 50
  },
  {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, nisi id consequat lacinia, risus urna facilisis quam, vitae venenatis urna velit et nisl. Morbi id nibh non augue accumsan vulputate at et mi. Etiam hendrerit, purus dignissim placerat iaculis, ligula risus ornare leo, nec vulputate lectus lectus in nisl. Aenean sodales euismod tortor sed posuere. Mauris dignissim tempus odio, a porttitor lacus efficitur ut. Cras eget auctor velit. Nullam lacinia tempus scelerisque. Donec efficitur odio a felis convallis, lacinia pretium erat molestie. Sed convallis eros a lorem eleifend, eget gravida felis porttitor. Morbi efficitur rutrum turpis.',
    location: 'Rishon Letzion',
    date: new Date('16:00 11/10/2020'),
    tags: ['Engineering', 'Development'],
    minimunPeople: 10,
    maxPeople: 100,
    arrivingAmount: 50,
    creator: {
      name: 'Yuval Shlefer',
      phoneNumber: '0546976974'
    },
    image: '',
    comments: ['great', 'success'],
    likes: 50
  }
];

export const EventPage = () => {
  const classes = useStyles();
  const [selectedEvent, setSelectedEvent] = React.useState();
  const [events, setEvents] = React.useState(eventsSeed);

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
  }

  const handleCloseDialog = () => {
    setSelectedEvent();
  }


  const handleSearchOnChange = (data) => {
    setEvents(eventsSeed.filter(x => x.title.includes(data) || x.description.includes(data) || x.location.includes(data)))//|| x.creator.Name.includes(data) || x.tags.filter(x => x.includes(data)) ))
  }

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
    </div>
  )
};