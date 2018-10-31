import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'

import Paragraph from '../Paragraph'
import Title from '../Title'
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
      <Fragment>
        <ButtonStyle>
          <img
            src={this.props.imageUrl}
            alt={this.props.title}
            onClick={this.handleClickOpen}
          />
        </ButtonStyle>

        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.handleClose}
        >
          <Title color>{this.props.title}</Title>
          <Paragraph color>{this.props.desc}</Paragraph>
        </Dialog>
      </Fragment>
    )
  }
}
