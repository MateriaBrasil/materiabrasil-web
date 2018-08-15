import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'

export default props => {
  const { current, currentUser } = props
  const { id, name, description, email, phone, reach, imageUrl } = current
  const { userId } = current

  const editPath =
    currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

  return (
    <Grid container spacing={32}>
      <Grid item xs={12} lg={4}>
        <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
        <Typography
          variant="display1"
          style={{ marginTop: 16, marginBottom: 16 }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardContent>
            <PropertyWithValue
              title="Descrição"
              value={description}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Email"
              value={email}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Telefone"
              value={phone}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Alcance"
              value={translateReach(reach)}
              style={{ marginTop: 16 }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Addresses id={id} supplier={current} {...props} />
    </Grid>
  )
}
