import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'
import Dialog from 'materials/Dialog'

export default props => routeProps => {
  return (
    <Dialog {...props} {...routeProps} title="Torne-se premium">
      {props.currentUser && props.currentUser.pendingSubscription ? (
        <Typography color="inherit" variant="h5">
          Estamos processando sua assinatura! Volte mais tarde.
        </Typography>
      ) : (
        <Fragment>
          <Typography color="inherit">
            Para usar esta opção, torne-se premium!
          </Typography>
          <Link
            to={`/albums/${routeProps.match.params.id}/premium/pay`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '40px auto 0px', display: 'block' }}
            >
              Quero ser premium
            </Button>
          </Link>
        </Fragment>
      )}
    </Dialog>
  )
}
