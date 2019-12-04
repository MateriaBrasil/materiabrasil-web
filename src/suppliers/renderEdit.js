import React from 'react';
import { Edit } from 'croods';
import Redirect from 'react-router-dom/Redirect';

import render from './edit/render';

export default props => routeProps => {
  const { match } = routeProps;
  const { params } = match;
  const { id } = params;

  return (
    <Edit
      id={id}
      name="suppliers"
      render={render({ ...props, ...routeProps })}
      renderUpdated={() => (
        <Redirect
          to={`/suppliers/${props.currentUser.suppliers[0].slug}?reload=true`}
        />
      )}
    />
  );
};
