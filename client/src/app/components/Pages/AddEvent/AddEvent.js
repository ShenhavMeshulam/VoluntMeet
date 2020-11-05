import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, TextField, Typography, Button, InputAdornment  } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {TagsInput} from '../../TagsInput';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useForm} from 'react-hook-form';

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
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const {register, control, handleSubmit} = useForm();

  const createEvent = (event) => {
    console.log(event);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4" component="h3" className={classes.headline}>
          Add Volunteering Event
          </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(createEvent)}>
      <DialogContent>
        <Grid container direction="column" justify="center" alignItems="flex-start" spacing={2}>
          <Grid item className={classes.description}>
            <TextField name="title" label="Title" variant="outlined" fullWidth inputRef={register} />
          </Grid>
          <Grid item className={classes.description}>
            <TextField
              name="description"
              label="Description"
              multiline
              rows={4}
              placeholder="Tell us about your event..."
              variant="outlined"
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid container item direction="row" spacing={1}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={4}>
                <KeyboardDatePicker
                  disableToolbar
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Date"
                  inputVariant="outlined"
                  value={date}
                  onChange={value => setDate(value)}
                  name="date"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={4}>
                <KeyboardTimePicker
                  margin="normal"
                  label="Time"
                  inputVariant="outlined"
                  keyboardIcon={<ScheduleIcon />}
                  name="time"
                  inputRef={register}
                  value={time}
                  onChange={value => setTime(value)}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item className={classes.inputWidth}>
            <TextField name="location" label="Location" variant="outlined" fullWidth 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon className={classes.locationIcon} />
                  </InputAdornment>
                ),
              }}
              inputRef={register}/>
          </Grid>

          <Grid container item direction="row" spacing={1}>
            <Grid item xs={4}>
              <TextField name="minPeople" label="Min People" type="number" variant="outlined" inputRef={register}/>
            </Grid>
            <Grid item xs={4}>
              <TextField name="maxPeople" label="Max People" type="number" variant="outlined" inputRef={register} />
            </Grid>
          </Grid>

          <Grid item className={classes.inputWidth}>
            <TagsInput name="tags" label="tags" fullWidth control={control} />
          </Grid>
          {/* onChange={(chips) => handleChange(chips)} */}
          <Grid item>
            <Typography variant="h5" component="h4">
              Contact Information
            </Typography>
          </Grid>

          <Grid item>
            <TextField name="creator.name" label="Full Name" variant="outlined" inputRef={register} />
          </Grid>
          <Grid item>
            <TextField name="creator.phoneNumber" label="Phone Number" variant="outlined" inputRef={register} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
        </Button>
        <Button color="primary" variant="contained" type="submit">
          Add
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  );
};