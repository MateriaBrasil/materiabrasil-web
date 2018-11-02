import React, { Fragment } from 'react'
import Media from 'react-media'
import Sessions from './Sessions'
import SessionsWithStepper from './SessionsWithStepper'
import handleScroll from './handleScroll'

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
        <Media query="(min-width: 960px)">
          {matches =>
            matches ? <SessionsWithStepper activeStep={activeStep} /> : null
          }
        </Media>
        <Sessions handleScroll={this.handleScroll} />
      </Fragment>
    )
  }
}
