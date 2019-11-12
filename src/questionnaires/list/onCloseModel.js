export default props => () => {
  props.history.push(
    `/${props.aboutType.toLowerCase()}s/${props.match.params.id}?reload=true`,
  );
};
