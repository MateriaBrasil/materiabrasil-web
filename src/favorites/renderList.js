import React from 'react'
import map from 'lodash/map'
import Grid from '@material-ui/core/Grid'

import Card from '../materials/list/Card'
import Destroy from './Destroy'

export default props => list => {
  const { showDestroy } = props

  return (
    <Grid container spacing={16}>
      {map(list, ({ id, favoritable, destroying }) => (
        <Grid item xs={6} sm={4} md={4} key={id}>
          <Card
            {...favoritable}
            cardAction={
              showDestroy ? <Destroy id={id} destroying={destroying} /> : null
            }
          />
        </Grid>
      ))}
    </Grid>
  )
}
