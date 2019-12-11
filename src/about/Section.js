import React from 'react';
import Grid from '@material-ui/core/Grid';

import Colors from '../Colors';

export default ({ backgroundImage, style, ...props }) => {
  return (
    <Grid
      container
      {...props}
      style={{
        background: backgroundImage || Colors.grayNurse,
        backgroundPosition: 'center',
        paddingTop: '25%',
        paddingBottom: '25%',
        paddingRight: '5%',
        paddingLeft: '5%',
        backgroundSize: 'cover',
        alignContent: 'center',
        ...style,
      }}
    />
  );
};
