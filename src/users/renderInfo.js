import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Album from './Album'

export default props => infoProps => {
  const { currentUser } = props
  const { id, name, albums } = infoProps
  const album = albums[0]

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CardMedia
              style={{
                width: 150,
                height: 150,
                display: 'inline-block',
                marginRight: 16,
                borderRadius: 2,
              }}
              image="/images/avatar.png"
              title={name}
            />
            <Typography
              variant="display1"
              style={{ display: 'inline-block', verticalAlign: 'top' }}
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {album && <Album {...album} showDestroy={currentUser.id === id} />}
      </Grid>
    </Grid>
  )
}
