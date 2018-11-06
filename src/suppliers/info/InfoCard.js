import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import SignUpLink from '../../auth/SignUpLink'
import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'
import MessageButton from '../../messages/new/Button'

export default props => {
  const { current, currentUser, location } = props
  const { pathname } = location
  const { id, description, email, phone, reach } = current

  return (
    <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
      <Card>
        <CardContent>
          <PropertyWithValue
            title="Descrição"
            value={description}
            style={{ marginTop: 16 }}
          />
          <PropertyWithValue
            title="Alcance"
            value={translateReach(reach)}
            style={{ marginTop: 16 }}
          />
          {currentUser ? (
            <Fragment>
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
              <MessageButton id={id} type="suppliers" />
            </Fragment>
          ) : (
            <div style={{ marginTop: 16 }}>
              <SignUpLink
                pathname={pathname}
                text="para ver o contato do fornecedor."
              />
            </div>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}
