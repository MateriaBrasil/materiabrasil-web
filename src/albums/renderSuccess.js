import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'

export default props => routeProps => {
  return (
    <Dialog
      {...props}
      {...routeProps}
      title="Assinatura criada"
      onCloseModel={() => {
        routeProps.history.push(`/albums/${routeProps.match.params.id}`)
      }}
    >
      <Typography variant="h5" color="inherit">
        Parabéns! Você ativou sua assinatura com sucesso.
      </Typography>
    </Dialog>
  )
}
