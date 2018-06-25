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
      <form onSubmit={onSubmit}>
        {title && <CardHeader title={title} />}
        <CardContent>{children}</CardContent>
        <CardActions
          style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 16 }}
        >
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting}
            style={{ width: '100%' }}
          >
            {callToAction}
          </Button>
        </CardActions>
        {error && <Error>{error}</Error>}
      </form>
    </Card>
  )
}

export default Form
