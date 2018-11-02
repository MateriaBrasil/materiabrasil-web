export default function(step) {
  return () => {
    this.setState({
      activeStep: step,
    })
  }
}
