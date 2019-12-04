import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom/Link';

import List from './List';
import SignUpLink from '../auth/SignUpLink';

export default props => {
  const { currentUser, supplier, location } = props;
  const { pathname } = location;

  return (
    <Fragment>
      {currentUser ? (
        <Fragment>
          {currentUser.id === supplier.userId && (
            <Link
              to={`/suppliers/${supplier.id}/address`}
              style={{ textDecoration: 'none', marginLeft: '15px' }}
            >
              <Button variant="contained" color="primary">
                Adicionar endereço
              </Button>
            </Link>
          )}
          <List {...props} />
        </Fragment>
      ) : (
        <Grid item xs={12}>
          <SignUpLink
            pathname={pathname}
            text="para ver os endereços do fornecedor."
          />
        </Grid>
      )}
    </Fragment>
  );
};
