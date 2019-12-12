import React from 'react';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import Colors from '../Colors';

export default ({
  location: { pathname },
  isInstitutionalPage,
  transparent,
}) => (
  <Link
    className="navbar-link"
    to={{
      pathname: '/auth/sign-in',
      state: { referrer: pathname },
    }}
    style={{
      textDecoration: 'none',
      color: transparent && window.outerWidth > 768 ? '#FFF' : '#000',
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Entrar
    </Typography>
  </Link>
);
