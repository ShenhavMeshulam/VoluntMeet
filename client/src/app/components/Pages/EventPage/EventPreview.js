import React from 'react';
import clsx from 'clsx';
import { formatDistance } from 'date-fns';
import { Box, Button, Card, CardActions, CardContent, Typography, makeStyles, Chip, Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLaterOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    cursor: 'pointer'
  },
  headerDetails: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
    textTransform: 'capitalize'
  },
  tags: {
    padding: `${theme.spacing(1)}px 0`
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
    textTransform: 'capitalize',
    color: theme.palette.background.default
  },
  content: {
    flex: 1
  },
  title: {
    textTransform: 'capitalize'
  },
  timeAndLocation: {
    textTransform: 'capitalize'
  }
}));

export const EventPreview = ({ event = {}, className, handleDialogOpen }) => {
  const classes = useStyles();
  
  return (
    <Card className={clsx([classes.root, className])} onClick={() => handleDialogOpen(event)}>
      <CardContent className={classes.content}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5" className={classes.title}>
              {event.title}
            </Typography>
            <Typography variant="body1" className={classes.headerDetails}>
              By {event.creator.name}
            </Typography>
          </Box>
          <Box className={classes.timeAndLocation} display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-around">
            {
              event.date &&
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography>
                  {formatDistance(new Date(event.date), new Date(), { addSuffix: true })}
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
        <Grid container spacing={1} className={classes.tags}>
          {
            event.tags.map(tag => (
              <Grid key={tag} item>
                <Chip label={tag} variant="outlined" size="small" />
              </Grid>
            ))
          }
        </Grid>
        <Typography variant="body1" className={classes.description}>
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.showButton} onClick={() => handleDialogOpen(event)} variant="contained" color="secondary">Tell Me More</Button>
      </CardActions>
    </Card>
  );
};