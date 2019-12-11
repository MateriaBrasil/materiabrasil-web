import React from 'react';
import Typography from '@material-ui/core/Typography';

import onClick from '../../onClick';

export default ({ destroy, isInstitutionalPage, transparent }) => (
  <a
    className="navbar-link"
    href="#destroy"
    onClick={onClick(destroy)}
    style={{
      marginLeft: 20,
      color: transparent && window.outerWidth > 768 ? '#FFF' : '#000',
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Sair
    </Typography>
  </a>
);
