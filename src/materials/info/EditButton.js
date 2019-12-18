import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';

export default props => {
  const { id, slug, path = 'edit', label, editable } = props;

  const gaMaterialEvent = function() {
    if (!editable) {
      ReactGA.event({
        category: 'Ver Questionário Material',
        action: `${props.current.supplierName} ${props.current.name}`,
        label: props.current.name,
      });
    }
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
