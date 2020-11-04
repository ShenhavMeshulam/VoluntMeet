import React from 'react';
import clsx from 'clsx';
import {formatDistance} from 'date-fns';
import {Box, Button, Card, CardActions, CardContent, Typography, makeStyles} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLaterOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  header: {
    paddingBottom: theme.spacing(2)
  },
  headerDetails: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  icon: {
    paddingLeft: theme.spacing(1)
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical'
  },
  showButton: {
    textTransform: 'capitalize'
  }
}));

export const EventPreview = ({event = {}, className}) => {
  const classes = useStyles();

  return (
    <Card className={clsx([classes.root, className])}>
      <CardContent>
        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.header}>
          <Box>
            <Typography variant="h5">
              {event.title}
            </Typography>
            <Typography variant="body1" className={classes.headerDetails}>
              By {event.author}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-around">
            {
              event.date &&
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography>
                  {formatDistance(event.date, new Date(), {addSuffix: true})}
                </Typography>
                <WatchLaterIcon className={classes.icon} />
              </Box>
            }
            {
              event.location &&
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography>
                  {event.location}
                </Typography>
                <LocationOnIcon className={classes.icon} />
              </Box>
            }
          </Box>
        </Box>
        <Typography variant="body1" className={classes.description}>
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.showButton} variant="contained" color="primary">Tell Me More</Button>
      </CardActions>
    </Card>
  );
};