import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'

import Button from './Button'
import NameAndDescription from './NameAndDescription'
import Title from '../Title'

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
    const { imageUrl, title, description } = this.props

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: 20 }}>
        <Button
          style={{
            display: 'block',
            height: 200,
          }}
        >
          <img src={imageUrl} onClick={this.handleClickOpen} alt={title} />
        </Button>

        <NameAndDescription title={title}>{description}</NameAndDescription>

        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.handleClose}
        >
          <Title color>PERGUNTAS DOS QUESTIONÁRIOS:</Title>
        </Dialog>
      </Grid>
    )
  }
}
