import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import SignUpLink from '../../auth/SignUpLink'
import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'

export default props => {
  const { current, currentUser, location } = props
  const { pathname } = location
  const { description, email, phone, reach } = current
  return (
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
  )
}
