import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Form from './Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => {
  const { id } = props

  return (
    <Card>
      <CardContent>
        <Typography
          variant="headline"
          color="textSecondary"
          style={{ marginBottom: 16 }}
        >
          Adicionar endereço
        </Typography>
        <Fragment>
          <Form
            {...props}
            onSubmit={createWithParams(create, id)}
            creating={creating}
            createError={error}
          />
        </Fragment>
      </CardContent>
    </Card>

  )
}
