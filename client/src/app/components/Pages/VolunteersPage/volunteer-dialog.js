import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GroupIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue'
    },
    creatorContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    creatorName: {
        paddingTop: '20px',
        paddingRight: '15px',
        fontSize: '15px'
    },
    creatorNumber: {
        paddingRight: '15px',
        fontSize: '15px'
    },
    title: {
        margin: 0,
        textTransform: 'uppercase',
        padding: theme.spacing(2.5),
        flexWrap: 'auto'
        // fontFamily: 'cursive'
    },
    fieldContainer : {
          display: 'flex',
          padding: '10px',
          fontSize: 'Larger',
        //   fontFamily: 'cursive'
      },
      propTitle: {
          paddingLeft: '5px',
          paddingRight: '5px',
          fontWeight: 'bold',
        //   fontFamily: 'cursive'
      },
      dialogContent: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        backgroundColor: 'grey'
      },
      dialogActions: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
        padding: theme.spacing(1),
        backgroundColor: 'grey'
      },
      closeButton: {
        textTransform: 'capitalize',
        fontSize: '20px',
        color: 'black'
      },
      signUpButton: {
        textTransform: 'capitalize',
        fontSize: '15px',
        fontWeight: '500',
        color: 'black',
        backgroundColor: 'lightblue'
      },
      socialContainer: {
          display: 'flex',
          flexFlow: 'row',
          marginTop: '6px',
          paddingLeft: theme.spacing(3)
      },
      commentsContainer: {
          display: 'flex',
          flexFlow: 'row'
      },
      eventDetails: {
          width: '65%'
      },
      otherDetailsContainer: {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'flex-start',
          flex: 'auto'
      },
      image: {
          width: '70%',
          height: '40%',
          padding: '10px'
      },
      socialDetails: {
          fontWeight: '1000',
          fontSize: '20px'
      }
    }));

const event = {
    title: 'event',
    description: 'yuval checkin ggbhjgyyyyyyyy yyyyy yyyyyyyyyyyyyy yyyyyyyyy yyyyyyyyyyyy yyyyyyy yyyyyyyyy yyyyyyy yyy yyyyy yy yyyyyyy',
    date: new Date().toLocaleDateString("IL").split("/").toString(),
    location: 'yehud',
    Tags: ['launch', 'tryme'],
    minimunPeople: 2,
    maxPeople: 20000,
    arrivingAmount: 15,
    creator: {
        name: 'Yuval Shlefer',
        phoneNumber: '0546976974'
    },
    comments: ['great success', 'good job'],
    likes: 15,
    image: ''
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth={'lg'}>
          <div className={classes.titleContainer}>
        <MuiDialogTitle className={classes.title} id="customized-dialog-title" onClose={handleClose}>
          {event.title}
        </MuiDialogTitle>
        <IconButton autoFocus className={classes.closeButton} onClick={handleClose} color="primary">
            <CloseIcon />
        </IconButton>
        </div>
        <MuiDialogContent className={classes.dialogContent} dividers>
            <div className={classes.eventDetails}>
          <Typography gutterBottom className={classes.fieldContainer}>
              <DescriptionIcon />
              <div className={classes.propTitle}>Description: </div>
                {event.description}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <EventIcon />
              <div className={classes.propTitle}>Date: </div>
            {event.date}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <LocationOnIcon />
              <div className={classes.propTitle}>Location: </div>
            {event.location}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <GroupIcon />
              <div className={classes.propTitle}>Minimum People: </div>
           {event.minimunPeople}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <GroupIcon />
              <div className={classes.propTitle}>Max People: </div>
           {event.maxPeople}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <EmojiPeopleIcon />
              <div className={classes.propTitle}>Arriving Amount:</div>
           {event.arrivingAmount}
          </Typography>
          <Typography gutterBottom className={classes.fieldContainer}>
              <LocalOfferIcon />
              <div className={classes.propTitle}>Tags: </div>
           {event.Tags.map(tag => tag + ', ')}
          </Typography>
          </div>
          <div className={classes.otherDetailsContainer}>
            <Typography gutterBottom className={classes.fieldContainer}>
                <DescriptionIcon />
                <div className={classes.propTitle}>Full Name: </div>
                {event.creator.name}
            </Typography>
            <Typography gutterBottom className={classes.fieldContainer}>
                <DescriptionIcon />
                <div className={classes.propTitle}>Phone Number: </div>
                {event.creator.phoneNumber}
            </Typography>
            <img src={event.image} alt="Event Image" className={classes.image}></img>
          </div>
        </MuiDialogContent>
        <MuiDialogActions className={classes.dialogActions}>
            <div className={classes.socialContainer}>
            <div className={classes.socialDetails}>{event.likes}</div>
            <FavoriteIcon color={'error'}/>
            <div className={classes.commentsContainer}>
                <div className={classes.socialDetails}>{event.comments.length}</div>
                <CommentIcon />
            </div>
            </div>
            <div className={classes.optionsContainer}>
          <Button autoFocus className={classes.signUpButton} onClick={handleClose} color="primary">
            Sign Me Up!
          </Button>
          </div>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}

