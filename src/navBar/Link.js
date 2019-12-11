import React from 'react';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import Colors from '../Colors';
import './Link.css';

export default ({ to, text, isInstitutionalPage, targetBlank, white }) => (
  <Link
    className="navbar-link"
    to={to}
    target={targetBlank ? '_blank' : undefined}
    style={{
      textDecoration: 'none',
      // color: isInstitutionalPage ? Colors.white : Colors.black,
      color: white ? '#fff' : Colors.black,
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      {text}
    </Typography>
  </Link>
);
