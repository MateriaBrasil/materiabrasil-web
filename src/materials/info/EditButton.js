import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';

export default props => {
  const { id, slug, path = 'edit', label } = props;

  return (
    <Link
      to={`/materials/${slug}/${path}`}
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <Button variant="contained" color="primary" style={{ marginBottom: 24 }}>
        {label}
      </Button>
    </Link>
  );
};
