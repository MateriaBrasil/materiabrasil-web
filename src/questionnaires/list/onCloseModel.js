export default props => () => {
  props.history.push(`/materials/${props.match.params.id}?reload=true`)
}
