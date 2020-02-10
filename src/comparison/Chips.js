import React from 'react';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import map from 'lodash/map';

import removeItem from './removeItem';
import Colors from './Colors';

export default props => {
  let history = useHistory();
  const { list, alignItems, remove, close } = props;

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
        onClick={e => {
          history.push('/');
          close();
        }}
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
