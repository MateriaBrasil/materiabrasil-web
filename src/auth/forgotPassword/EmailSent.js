import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import SingleColumn from 'SingleColumn'

export default props => (
  <SingleColumn>
    <Card
      title="Resetar senha"
      style={{ padding: '20px 20px', textAlign: 'center' }}
    >
      <CardContent>Enviamos um e-mail para resetar sua senha</CardContent>
    </Card>
  </SingleColumn>
)
