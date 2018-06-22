import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import Error from '../Error'

import './errorMessages'

const Form = props => {
  const { children, onSubmit, title, callToAction, error, submitting } = props

  return (
    <Card>
      {title && <CardHeader title={title} />}
      <CardContent>
        <form>{children}</form>
      </CardContent>
      <CardActions
        style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 16 }}
      >
        <Button
          variant="raised"
          color="primary"
          disabled={submitting}
          style={{ width: '100%' }}
          onClick={onSubmit}
        >
          {callToAction}
        </Button>
      </CardActions>
      {error && <Error>{error}</Error>}
    </Card>
  )
}

export default Form
