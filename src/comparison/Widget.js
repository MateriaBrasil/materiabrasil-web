import React from 'react';
import { useHistory } from 'react-router-dom';
import Chart from './Chart';
import OpenButton from './OpenButton';

export default props => {
  let history = useHistory();
  const { open, actions } = props;
  console.log(props);
  function goHome() {
    history.push('/');
  }

  console.log(props);
  console.log('widget');

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 20,
        zIndex: 1000,
      }}
    >
      {open ? (
        <Chart {...props} goHome={goHome} />
      ) : (
        <OpenButton onClick={actions.open} />
      )}
    </div>
  );
};
