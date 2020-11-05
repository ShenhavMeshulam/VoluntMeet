import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Lottie from 'react-lottie';
import animationData from '../../assests/success.json';

const useStyles = makeStyles(() => ({
  dialog: {
    width: '220px'
  }
}));

export const SuccessDialog = ({ open, handleClose }) => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h4" component="h2">
          Waiting For You!
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.dialog}>
        <Lottie          
          options={defaultOptions}
          height={160}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
          </Button>
      </DialogActions>
    </Dialog>
  );
};