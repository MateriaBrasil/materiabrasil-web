import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import NewFavorite from '../../favorites/New'
import Reviews from './Reviews'
import TechnicalSpecification from '../list/TechnicalSpecification'

export default props => {
  const { code, description, name } = props

  return (
    <Grid item xs={12} sm={9}>
      <Card elevation={1}>
        <CardContent>
          <Typography variant="display1">{name}</Typography>
          <Typography variant="caption" style={{ marginBottom: 16 }}>
            {code}
          </Typography>
          <Typography variant="subheading" style={{ marginBottom: 24 }}>
            {description}
          </Typography>
          <Reviews {...props} />
          <TechnicalSpecification {...props} style={{ color: 'black' }} />
          <NewFavorite {...props} />
        </CardContent>
      </Card>
    </Grid>
  )
}
