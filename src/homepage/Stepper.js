import React, { Fragment } from 'react'
import Media from 'react-media'
import Waypoint from 'react-waypoint'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import Explore from './Explore'
import HowToUseIt from './HowToUseIt'
import Drivers from './Drivers'
import CuratedBy from './CuratedBy'

const styles = theme => ({
  root: {
    width: '214px',
    background: 'transparent',
    position: 'fixed',
    right: 0,
    top: 200,
    boxShadow: 'none',
  },
  label: {
    color: '#fff',
  },
})

const steps = [
  { id: 'explore', name: 'Explore' },
  { id: 'how_to_use_it', name: 'How to use it' },
  { id: 'drivers', name: 'Drivers' },
  { id: 'curated_by', name: 'Curated by' },
]

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    })

    document.getElementById(steps[step].id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  handleScroll = step => {
    this.setState({
      activeStep: step,
    })
  }

  render() {
    const { activeStep } = this.state
    return (
      <Fragment>
        <Media query="(min-width: 960px)">
          {matches =>
            matches ? (
              <Stepper
                activeStep={activeStep}
                orientation="vertical"
                className={this.props.classes.root}
              >
                {map(steps, ({ name }, index) => {
                  return (
                    <Step key={index} onClick={this.handleStep(index)}>
                      <StepLabel className={this.props.classes.label}>
                        {name}
                      </StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            ) : null
          }
        </Media>
        <Waypoint
          onEnter={() => {
            this.handleScroll(0)
          }}
        >
          <div>
            <Explore />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => {
            this.handleScroll(1)
          }}
        >
          <div>
            <HowToUseIt />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => {
            this.handleScroll(2)
          }}
        >
          <div>
            <Drivers />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => {
            this.handleScroll(3)
          }}
        >
          <div>
            <CuratedBy />
          </div>
        </Waypoint>
      </Fragment>
    )
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(VerticalLinearStepper)
