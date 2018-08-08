import React from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Avatar from './Avatar'
import Album from './Album'

export default props => infoProps => {
  const { currentUser } = props
  const { id, firstName, lastName, albums } = infoProps
  const name = `${firstName} ${lastName}`
  const album = albums[0]
  const editable = currentUser && currentUser.id === id

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Avatar name={name} editable={editable} />
            <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <Typography variant="display1">{name}</Typography>
              <Link to="/profile/edit">
                <Typography variant="subheading">Editar perfil</Typography>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {album && <Album {...album} showDestroy={editable} />}
      </Grid>
    </Grid>
  )
}
