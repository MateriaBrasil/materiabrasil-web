import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'

export default props => routeProps => {
  return (
    <Dialog
      {...props}
      {...routeProps}
      title={routeProps.location.state.title}
      onCloseModel={() => {
        routeProps.history.push(`/albums/${routeProps.match.params.id}`)
      }}
    >
      <Typography variant="h5" color="inherit">
        {routeProps.location.state.message}
      </Typography>
    </Dialog>
  )
}
