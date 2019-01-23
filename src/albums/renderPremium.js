import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'
import Dialog from 'materials/Dialog'
import UserMessages from './UserMessages'

export default props => routeProps => {
  return (
    <Dialog {...props} {...routeProps} title="Torne-se premium">
      <UserMessages {...props} />
      {props.currentUser &&
        !props.currentUser.pendingSubscription &&
        !props.currentUser.subscribed && (
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
