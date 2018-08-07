import React from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Avatar from './Avatar'
import Album from './Album'
import TitleWithValue from './TitleWithValue'

export default props => infoProps => {
  const { currentUser } = props
  const { id, firstName, lastName, albums, email, website } = infoProps
  const { city, state, country, company, workTitle, bio } = infoProps
  const { imageUrl } = infoProps
  const name = `${firstName} ${lastName}`
  const album = albums[0]
  const editable = currentUser && currentUser.id === id

  return (
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Avatar name={name} editable={editable} imageUrl={imageUrl} />
        <div style={{ marginTop: 30 }}>
          <Typography variant="display1">{name}</Typography>
          {editable && (
            <Link to="/profile/edit">
              <Typography variant="subheading">Editar perfil</Typography>
            </Link>
          )}
          <TitleWithValue
            title="Email"
            value={email}
            style={{ marginTop: 32 }}
          />
          <TitleWithValue
            title="Website"
            value={website}
            style={{ marginTop: 16 }}
          />
        </div>
      </Grid>
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <TitleWithValue title="Bio" value={bio} style={{ marginTop: 16 }} />
            <TitleWithValue
              title="Organização"
              value={company}
              style={{ marginTop: 16 }}
            />
            <TitleWithValue
              title="Cargo"
              value={workTitle}
              style={{ marginTop: 16 }}
            />
            <TitleWithValue
              title="Cidade"
              value={city}
              style={{ marginTop: 16 }}
            />
            <TitleWithValue
              title="Estado"
              value={state}
              style={{ marginTop: 16 }}
            />
            <TitleWithValue
              title="País"
              value={country}
              style={{ marginTop: 16 }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {album && <Album {...album} showDestroy={editable} />}
      </Grid>
    </Grid>
  )
}
