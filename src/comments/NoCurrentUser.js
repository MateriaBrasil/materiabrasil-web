import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from 'react-router-dom/Link'

export default props => (
  <Card style={{ paddingTop: 8 }}>
    <CardContent>
      <Typography variant="body1" color="inherit">
        <Link to="/auth/sign-up" style={{ textDecoration: 'none' }}>
          Cadastre-se
        </Link>{' '}
        <span>para deixar comentários.</span>
      </Typography>
    </CardContent>
  </Card>
)
