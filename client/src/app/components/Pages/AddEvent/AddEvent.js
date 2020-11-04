import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, TextField, Typography, Button, InputAdornment  } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ChipInput from 'material-ui-chip-input'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  headline: {
    fontWeight: 'bold',
    borderBottom: '1px solid',
  },
  description: {
    width: '90%'
  },
  inputWidth: {
    width: '67%'
  },
  locationIcon: {
    color: theme.palette.text.secondary
  }
}));

export const AddEvent = ({ open, handleClose }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4" component="h3" className={classes.headline}>
          Add Volunteering Event
          </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container direction="column" justify="center" alignItems="flex-start" spacing={2}>
          <Grid item className={classes.description}>
            <TextField label="Title" variant="outlined" fullWidth />
          </Grid>
          <Grid item className={classes.description}>
            <TextField
              label="Description"
              multiline
              rows={4}
              placeholder="Tell us about your event..."
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid container item direction="row" spacing={1}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={4}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  inputVariant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <KeyboardTimePicker
                  margin="normal"
                  label="Time"
                  value={selectedDate}
                  onChange={handleDateChange}
                  inputVariant="outlined"
                  keyboardIcon={<ScheduleIcon />}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item className={classes.inputWidth}>
            <TextField label="Location" variant="outlined" fullWidth 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon className={classes.locationIcon} />
                  </InputAdornment>
                ),
              }}/>
          </Grid>

          <Grid container item direction="row" spacing={1}>
            <Grid item xs={4}>
              <TextField label="Min People" type="number" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Max People" type="number" variant="outlined" />
            </Grid>
          </Grid>

          <Grid item className={classes.inputWidth}>
            <ChipInput label="tags" fullWidth/>
          </Grid>
          {/* onChange={(chips) => handleChange(chips)} */}
          <Grid item>
            <Typography variant="h5" component="h4">
              Contact Information
            </Typography>
          </Grid>

          <Grid item>
            <TextField label="Full Name" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField label="Phone Number" variant="outlined" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
          </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Add
          </Button>
      </DialogActions>
    </Dialog>
  );
};