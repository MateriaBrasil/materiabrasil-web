import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import SingleColumn from '../SingleColumn'

const Form = ({ children, onSubmit, title, callToAction, ...props }) => {
  return (
    <SingleColumn>
      <Card>
        {title && <CardHeader title={title} />}
        <CardContent>
          <form onSubmit={onSubmit} {...props}>
            {children}
          </form>
        </CardContent>
        <CardActions
          style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 16 }}
        >
          <Button variant="raised" color="primary" style={{ width: '100%' }}>
            {callToAction}
          </Button>
        </CardActions>
      </Card>
    </SingleColumn>
  )
}

export default Form
