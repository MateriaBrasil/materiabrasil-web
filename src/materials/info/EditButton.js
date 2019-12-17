import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';

export default props => {
  const { id, slug, path = 'edit', label } = props;

  console.log(props);
  const gaMaterialEvent = function() {
    alert();
    ReactGA.event({
      category: `Ver Questionário Material`,
      action: `Click`,
      label: `Fornecedor: ${props.current.supplierName} Material: ${
        props.current.name
      }`,
    });
  };

  return (
    <Link
      onClick={gaMaterialEvent}
      to={`/materials/${slug}/${path}`}
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <Button variant="contained" color="primary" style={{ marginBottom: 24 }}>
        {label}
      </Button>
    </Link>
  );
};
