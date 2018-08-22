import React from 'react'
import Grid from '@material-ui/core/Grid'

import renderIcons from './renderIcons'
import Card from '../materials/list/Card'

export default ({ showDestroy, parentId }) => list => (
  <Grid container spacing={8} cellHeight={360}>
    {list.map(({ id, favoritable, destroying }, index) => {
      return (
        <Card
          key={id}
          ignoreHighlights
          renderIcons={renderIcons({ showDestroy, parentId, id, destroying })}
          material={favoritable}
        />
      )
    })}
  </Grid>
)
