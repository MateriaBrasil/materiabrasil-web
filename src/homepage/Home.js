import React, { Fragment } from 'react'
import Media from 'react-media'
import Sections from './Sections'
import Stepper from './Stepper'
import handleScroll from './handleScroll'
import NavBar from '../navBar/NavBar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeStep: 0 }
    this.handleScroll = handleScroll.bind(this)
  }

  render() {
    const { activeStep } = this.state
    return (
      <Fragment>
        <NavBar />
        <Media query="(min-width: 960px)">
          {matches => (matches ? <Stepper activeStep={activeStep} /> : null)}
        </Media>
        <Sections handleScroll={this.handleScroll} />
      </Fragment>
    )
  }
}
