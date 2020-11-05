import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {AddEventDialog} from './AddEventDialog';

export const AddEventButton = ({className, onAdd}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleAdd = (event) =>
    onAdd(event).then(() => setDialogOpen(false));

  return (
    <>
      <Button className={className} variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
        Add Event
      </Button>
      <AddEventDialog open={isDialogOpen} handleClose={() => setDialogOpen(false)} onAdd={handleAdd}/>
    </>
  )
}