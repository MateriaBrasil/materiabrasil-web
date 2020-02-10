import ReactGA from 'react-ga';

export default props => () => {
  props.comparison.actions.add(props.current);

  ReactGA.event({
    category: 'Comparação',
    action: 'Submit',
    label: props.current.name,
  });

  if (window.location.pathname.includes('materials')) {
    props.history.push('/');
  }
};
