import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import map from 'lodash/map';

import removeItem from './removeItem';
import Colors from './Colors';

export default props => {
  const { list, alignItems, remove, goHome } = props;

  return (
    <Grid
      item
      xs={12}
      lg={3}
      md={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        justifyContent: 'center',
      }}
    >
      <Chip
        onClick={goHome()}
        label={'INCLUIR MATERIAL'}
        style={{ marginBottom: 10 }}
      />
      {map(list, ({ id, name }, index) => (
        <Chip
          key={id}
          label={name}
          style={{ background: Colors[index], marginBottom: 10 }}
          onDelete={removeItem(id, remove)}
          color="secondary"
        />
      ))}
    </Grid>
  );
};
