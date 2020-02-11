import React from 'react';
import Chart from './Chart';
import OpenButton from './OpenButton';

import { camelizeKeys } from 'humps';

export default props => {
  const { open, actions } = props;
  const formatedList = camelizeKeys(props.list);

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
        <Chart open={open} actions={actions} list={formatedList} />
      ) : (
        <OpenButton onClick={actions.open} />
      )}
    </div>
  );
};
