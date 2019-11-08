import React, { Fragment } from 'react';
import Link from 'react-router-dom/Link';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SignUpLink from '../../auth/SignUpLink';

const style = {
  underlineOnHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default withStyles(style)(props => {
  const { supplierId, supplierName } = props;
  const { currentUser, location } = props;
  const { pathname } = location;

  return (
    <div style={{ marginBottom: 22 }}>
      {currentUser ? (
        <Fragment>
          <Link
            to={`/suppliers/${supplierId}`}
            className={props.classes.underlineOnHover}
          >
            <Typography color="primary">{supplierName}</Typography>
          </Link>
        </Fragment>
      ) : (
        <SignUpLink
          pathname={pathname}
          text="para ver o contato do fornecedor."
        />
      )}
    </div>
  );
});
