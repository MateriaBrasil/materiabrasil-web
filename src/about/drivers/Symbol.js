import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

import Colors from '../../Colors'
import ButtonStyle from './ButtonStyle'

export default class extends Component {
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
        <ButtonStyle
          style={{
            display: 'block',
            height: 200,
          }}
        >
          <img src={this.props.imageUrl} onClick={this.handleClickOpen} />
        </ButtonStyle>
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            color: Colors.white,
            fontWeight: 500,
          }}
        >
          {this.props.title}
        </Typography>
        <Typography
          variant="h6"
          style={{
            textAlign: 'center',
            color: Colors.white,
            fontWeight: 300,
          }}
        >
          {this.props.desc}
        </Typography>

        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.handleClose}
        />
      </Grid>
    )
  }
}
