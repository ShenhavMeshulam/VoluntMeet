import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GroupIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import {format} from 'date-fns';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
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
    flexWrap: 'auto',
  },
  fieldContainer: {
    display: 'flex',
    padding: '10px',
    fontSize: 'Larger',
  },
  propTitle: {
    paddingLeft: '5px',
    paddingRight: '5px',
    fontWeight: 'bold',
  },
  dialogContent: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: theme.spacing(1),
    color: theme.palette.text.primary
  },
  closeButton: {
    textTransform: 'capitalize',
    fontSize: '20px',
    color: 'white'
  },
  signUpButton: {
    textTransform: 'capitalize',
    fontSize: '15px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: theme.palette.primary.main
  },
  socialContainer: {
    display: 'flex',
    flexFlow: 'row',
    marginTop: '6px',
    paddingLeft: theme.spacing(3),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  socialStatContainer: {
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
    flex: 'auto',
    paddingTop: '30px'
  },
  image: {
    width: '70%',
    height: '40%',
    padding: '10px'
  },
  socialDetails: {
    fontWeight: '1000',
    fontSize: '20px'
  },
  tagsContainer: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'space-between',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

// const EventDialog = ({ isOpen, handleClose, event }) => {
export default function CustomizedDialogs({ isOpen, handleClose, event }) {
  const classes = useStyles();

  return (
    <div>
      <Dialog onClose={handleClose} open={isOpen} fullWidth={true} maxWidth={'lg'}>
        {event &&
          <>
            <div className={classes.titleContainer}>
              <MuiDialogTitle className={classes.title} onClose={handleClose}>
                {event.title}
              </MuiDialogTitle>
              <IconButton autoFocus className={classes.closeButton} onClick={handleClose} color="primary">
                <CloseIcon />
              </IconButton>
            </div>
            <MuiDialogContent className={classes.dialogContent} dividers>
              <div className={classes.eventDetails}>
                <div className={classes.tagsContainer}>
                  {event.tags.map(tag => {
                    return (<Chip size="small" label={tag} avatar={<LocalOfferIcon />} />)
                  })
                  }
                </div>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <DescriptionIcon />
                  <div className={classes.propTitle}>Description: </div>
                  {event.description}
                </Typography>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <EventIcon />
                  <div className={classes.propTitle}>Date: </div>
                  {format(new Date(event.date), 'dd/MM/yyyy HH:mm')}
                </Typography>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <LocationOnIcon />
                  <div className={classes.propTitle}>Location: </div>
                  {event.location}
                  {/* <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                      <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                      </div>
                    </InfoWindow>
                  </Map> */}
                </Typography>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <PersonIcon />
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
              </div>
              <div className={classes.otherDetailsContainer}>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <SubjectIcon />
                  <div className={classes.propTitle}>Full Name: </div>
                  {event.creator.name}
                </Typography>
                <Typography gutterBottom className={classes.fieldContainer}>
                  <PhoneIcon />
                  <div className={classes.propTitle}>Phone Number: </div>
                  {event.creator.phoneNumber}
                </Typography>
                <img src={event.image} alt="Event Image" className={classes.image}></img>
              </div>
            </MuiDialogContent>
            <MuiDialogActions className={classes.dialogActions}>
              <div className={classes.socialContainer}>
                <div className={classes.socialStatContainer}>
                  <div className={classes.socialDetails}>{event.likes}</div>
                  <FavoriteIcon color={'error'} />
                </div>
                <div className={classes.socialStatContainer}>
                  <div className={classes.socialDetails}>{event.comments.length}</div>
                  <CommentIcon />
                </div>
              </div>
              <div className={classes.optionsContainer}>
                <Button autoFocus className={classes.signUpButton} variant="contained" color="primary">
                  Sign Me Up!
                </Button>
              </div>
            </MuiDialogActions>
          </>
        }
      </Dialog>
    </div>
  );
}

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyARL7bYxZ10--R_d708Uxfh40pZxzXp_us")
//   })(EventDialog)