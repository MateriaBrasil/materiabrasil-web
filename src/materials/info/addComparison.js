import ReactGA from 'react-ga';

export default props => () => {
  props.comparison.actions.add(props.current);
  console.log('aaaa');
  ReactGA.event({
    category: 'Comparação',
    action: 'Submit',
    label: props.current.name,
  });
};
