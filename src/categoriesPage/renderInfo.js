import React from 'react';

import Info from './info';

export default props => routeProps => {
  const { id } = routeProps.match.params;
  const { location } = routeProps;
  return <Info location={location} id={id} {...props} />;
};
