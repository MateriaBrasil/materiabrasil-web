import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'

export default ({ current }) => {
  const { name, description, email, phone, reach } = current

  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={4}>
        <Typography variant="display1" style={{ marginBottom: 16 }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
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
    </Grid>
  )
}
