import React, {useState} from 'react';
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
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import GroupIcon from '@material-ui/icons/Group';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { SuccessDialog } from '../../SuccessDialog';

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
    },
    fieldContainer : {
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

export default function CustomizedDialogs({isOpen, handleClose, event}) {
  const classes = useStyles();

  const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);
  const handleSuccessClickOpen = () => {
    setSuccessDialogOpen(true);
  };
  const handleSuccessClose = () => {
    setSuccessDialogOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen} fullWidth={true} maxWidth={'lg'}>
          {event &&
          <>
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
            <div className={classes.tagsContainer}>
            { event.tags.map(tag => {
                return (
            <Chip
                size="small"
                label={tag}
                avatar={<LocalOfferIcon />}
            />
            )
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
            {event.date.toLocaleDateString("IL").split("/").toString()}
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
          <Button autoFocus className={classes.signUpButton} color="primary" onClick={handleSuccessClickOpen}>
            Sign Me Up!
          </Button>
          <SuccessDialog open={isSuccessDialogOpen} handleClose={handleSuccessClose} />
          </div>
        </MuiDialogActions>
        </>
          }
      </Dialog>
    </div>
  );
}