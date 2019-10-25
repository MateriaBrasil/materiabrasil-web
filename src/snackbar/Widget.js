import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Colors from '../Colors';

import './Snackbar.css';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  message: {
    color: Colors.white,
  },
});

export default withStyles(styles)(props => {
  const { message, classes, actions } = props;

  return (
    <Snackbar
      className="my-snakbar"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={!!message}
      onClose={actions.clearMessage}
      autoHideDuration={5000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <Typography id="message-id" className={classes.message}>
          {message}
        </Typography>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={actions.clearMessage}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
});
