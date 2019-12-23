import React from 'react';

import Grid from '../../../homepage/Grid';

import bg from '../../../homepage/bg_banner.png';

export default function(props) {
  const { children } = props;

  return (
    <Grid
      id="introduction"
      style={{ height: '15vh' }}
      backgroundImage={`url(${bg})`}
    >
      {children}
    </Grid>
  );
}
