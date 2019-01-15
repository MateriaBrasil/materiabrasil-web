export default props => event => {
  event.target.name = 'installments'
  props.handleBlur(event)
}
