import React from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Avatar from '../../imageUpload/Avatar'
import Album from './Album'
import PropertyWithValue from '../../PropertyWithValue'

export default props => infoProps => {
  const { currentUser } = props
  const { id, firstName, lastName, albums, email, website } = infoProps
  const { city, state, country, company, workTitle, bio } = infoProps
  const { imageUrl } = infoProps
  const name = `${firstName} ${lastName}`
  const album = albums[0]
  const editPath = currentUser && currentUser.id === id && '/profile/avatar'

  return (
    <Grid container spacing={32}>
      <Grid item xs={12} lg={4}>
        <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
        <div style={{ marginTop: 30 }}>
          <Typography variant="display1">{name}</Typography>
          {editPath && (
            <Link to="/profile/edit">
              <Typography variant="subheading">Editar perfil</Typography>
            </Link>
          )}
        </div>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardContent>
            <PropertyWithValue
              title="Email"
              value={email}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Website"
              value={website}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Bio"
              value={bio}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Organização"
              value={company}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Cargo"
              value={workTitle}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Cidade"
              value={city}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Estado"
              value={state}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="País"
              value={country}
              style={{ marginTop: 16 }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {album && <Album {...album} parentId={currentUser.id} showDestroy={!!editPath} />}
      </Grid>
    </Grid>
  )
}
