import React from 'react'
import Grid from '@material-ui/core/Grid'

import Search from '../search/Search'

export default props => {
  const { history, children } = props

  return (
    <Grid container spacing={8}>
      <Search history={history} />
      {children}
    </Grid>
  )
}
