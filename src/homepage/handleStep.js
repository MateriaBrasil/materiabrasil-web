import steps from './steps'
import scrollToDocument from './scrollToDocument'

export default function(step) {
  return () => {
    this.setState({
      activeStep: step,
    })

    scrollToDocument(steps[step].id)
  }
}
