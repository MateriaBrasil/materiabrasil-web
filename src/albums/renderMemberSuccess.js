import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'

export default props => routeProps => {
  return (
    <Dialog
      {...props}
      {...routeProps}
      title="Membro adicionado"
      onCloseModel={() => {
        routeProps.history.push(`/albums/${routeProps.match.params.id}`)
      }}
    >
      <Typography variant="h5" color="inherit">
        Parabéns! Você adicionou o membro com sucesso.
      </Typography>
    </Dialog>
  )
}
