import React from 'react'
import map from 'lodash/map'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import steps from './steps'

const style = theme => ({
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

export default withStyles(style)(props => (
  <Stepper
    activeStep={props.activeStep}
    orientation="vertical"
    className={props.classes.root}
  >
    {map(steps, ({ name }, index) => {
      return (
        <Step key={index} className={props.classes.step}>
          <StepLabel className={props.classes.label}>{name}</StepLabel>
        </Step>
      )
    })}
  </Stepper>
))
