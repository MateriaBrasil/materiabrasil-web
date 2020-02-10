import React from 'react';
import Chart from './Chart';
import OpenButton from './OpenButton';

export default props => {
  const { open, actions } = props;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 20,
        zIndex: 1000,
      }}
    >
      {open ? <Chart {...props} /> : <OpenButton onClick={actions.open} />}
    </div>
  );
};
