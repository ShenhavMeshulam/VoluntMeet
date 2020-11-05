import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { AddEventDialog } from './AddEventDialog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    display: 'flex',
    position: 'absolute',
    right: '38px',
    bottom: '18px',
    fontSize: '18px'
  },
}));

export const AddEventButton = ({ onAdd }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  const handleAdd = (event) =>
    onAdd(event).then(() => setDialogOpen(false));

  return (
    <>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
        Add Event
      </Button>
      <AddEventDialog open={isDialogOpen} handleClose={() => setDialogOpen(false)} onAdd={handleAdd} />
    </>
  );
};