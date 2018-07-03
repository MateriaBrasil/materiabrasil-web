import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Albums from './Albums'

export default () => props => {
  const { name } = props

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} style={{ display: 'flex' }}>
        <Card style={{ flex: 1 }}>
          <CardContent>
            <CardMedia
              style={{
                width: 150,
                height: 150,
                display: 'inline-block',
                marginRight: 16,
                borderRadius: 2,
              }}
              image="http://i.pravatar.cc/300"
              title={name}
            />
            <Typography
              variant="display1"
              style={{ display: 'inline-block', verticalAlign: 'top' }}
            >
              {name}
            </Typography>
          </CardContent>
          <CardContent>
            <Albums {...props} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
