import React from 'react';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';

export default props => {
  const { id, slug, path = 'edit', label } = props;

  const check_path = function() {
    if (path.includes('questionnaires')) {
      return id;
    } else {
      return slug;
    }
  };

  return (
    <Link
      to={`/materials/${check_path()}/${path}`}
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <Button variant="contained" color="primary" style={{ marginBottom: 24 }}>
        {label}
      </Button>
    </Link>
  );
};
