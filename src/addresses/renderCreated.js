import React from 'react';
import Redirect from 'react-router-dom/Redirect';

export default props => () => {
  const { slug } = props.currentUser.suppliers[0];
  return <Redirect to={`/suppliers/${slug}?reload=true`} />;
};
