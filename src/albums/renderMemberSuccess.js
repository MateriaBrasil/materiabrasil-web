import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'

export default props => routeProps => {
  return (
    <Dialog
      {...props}
      {...routeProps}
      title="Usuário adicionado"
      onCloseModel={() => {
        routeProps.history.push(`/albums/${routeProps.match.params.id}`)
      }}
    >
      <Typography variant="h5" color="inherit">
        Parabéns! Você adicionou o usuário com sucesso.
      </Typography>
    </Dialog>
  )
}
