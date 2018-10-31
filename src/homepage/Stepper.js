import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const styles = theme => ({
  root: {
    width: '214px',
    background: 'transparent',
    position: 'fixed',
    right: 0,
    top: 200,
    boxShadow: 'none'
  },
  label: {
      color: "#fff"
  }
})

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad']
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  render() {
    const { activeStep } = this.state

    return (
      <Stepper activeStep={activeStep} orientation="vertical" className={this.props.classes.root}>
        <Step key="1" onClick={this.handleStep(0)}>
          <StepLabel className={this.props.classes.label}>Step 1</StepLabel>
        </Step>
        <Step key="2" onClick={this.handleStep(1)}>
          <StepLabel className={this.props.classes.label}>Step 2</StepLabel>
        </Step>
        <Step key="3" onClick={this.handleStep(2)}>
          <StepLabel className={this.props.classes.label}>Step 3</StepLabel>
        </Step>
      </Stepper>
    )
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(VerticalLinearStepper)
