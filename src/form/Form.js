import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import Error from 'Error'
import Loading from '../Loading'

import './errorMessages'

export default props => {
  const { children, onSubmit, title, callToAction, error, submitting } = props

  return (
    <Card>
      <form onSubmit={onSubmit}>
        {title && <CardHeader title={title} />}
        <CardContent>{children}</CardContent>
        <CardActions style={{ paddingBottom: 16 }}>
          {submitting ? (
            <Loading style={{ width: '100%' }} />
          ) : (
            <Button
              type="submit"
              style={{ width: '100%' }}
              color="primary"
              variant="contained"
            >
              {callToAction}
            </Button>
          )}
        </CardActions>
        <Error>{error}</Error>
      </form>
    </Card>
  )
}
