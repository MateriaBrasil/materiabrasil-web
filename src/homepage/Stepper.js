import React, { Fragment } from 'react'
import Media from 'react-media'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import Explore from './Explore'
import HowToUseIt from './HowToUseIt'
import Introduction from './Introduction'
import Section from './Section'
import steps from './steps'
import handleScroll from './handleScroll'

const styles = theme => ({
  root: {
    width: '214px',
    background: 'transparent',
    position: 'fixed',
    right: 0,
    top: '40%',
    boxShadow: 'none',
  },
  step: {
    cursor: 'pointer',
  },
  label: {
    color: '#fff',
  },
})

class VerticalLinearStepper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeStep: 0 }
    this.handleScroll = handleScroll.bind(this)
  }

  renderSections = () => (
    <Fragment>
      <Section handleScroll={this.handleScroll(0)}>
        <Explore />
      </Section>
      <Section handleScroll={this.handleScroll(1)}>
        <HowToUseIt />
      </Section>
      <Section handleScroll={this.handleScroll(2)}>
        <Introduction />
      </Section>
    </Fragment>
  )

  renderStepper = activeStep => (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      className={this.props.classes.root}
    >
      {map(steps, ({ name }, index) => {
        return (
          <Step key={index} className={this.props.classes.step}>
            <StepLabel className={this.props.classes.label}>{name}</StepLabel>
          </Step>
        )
      })}
    </Stepper>
  )

  render() {
    const { activeStep } = this.state
    return (
      <Fragment>
        <Media query="(min-width: 960px)">
          {matches => (matches ? this.renderStepper(activeStep) : null)}
        </Media>
        {this.renderSections()}
      </Fragment>
    )
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(VerticalLinearStepper)
