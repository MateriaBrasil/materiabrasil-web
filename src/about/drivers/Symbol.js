import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

import Colors from '../../Colors'
import Button from './Button'

const styles = theme => ({
  style: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 600,
  },
})

class Symbol extends Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = value => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: 20 }}>
        <Button
          style={{
            display: 'block',
            height: 200,
          }}
        >
          <img src={this.props.imageUrl} onClick={this.handleClickOpen} />
        </Button>
        <Typography variant="h5" className={this.props.classes.style}>
          {this.props.title}
        </Typography>
        <Typography
          variant="h6"
          className={this.props.classes.style}
          style={{
            fontWeight: 300,
          }}
        >
          {this.props.desc}
        </Typography>

        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.handleClose}
        >
          TO DO...
        </Dialog>
      </Grid>
    )
  }
}

export default withStyles(styles)(Symbol)
