import React from 'react'
import Dialog from 'materials/Dialog'
import { Formik } from 'formik'
import { New } from 'croods'
import Typography from '@material-ui/core/Typography'
import Redirect from 'react-router-dom/Redirect'
import renderForm from '../payments/form/render'
import validate from '../payments/form/validate'
import createWithParams from '../payments/createWithParams'

export default props => routeProps => {
  const { setCurrentUser, currentUser } = props

  return (
    <Dialog {...props} {...routeProps} title="Torne-se premium">
      {props.currentUser &&
        props.currentUser.pendingSubscription && (
          <Typography color="inherit" variant="h5">
            Estamos processando sua assinatura! Volte mais tarde.
          </Typography>
        )}
      {props.currentUser &&
        props.currentUser.subscribed && (
          <Typography color="inherit" variant="h5">
            Parabéns! Você ativou sua assinatura com sucesso.
          </Typography>
        )}
      {props.currentUser &&
        !props.currentUser.pendingSubscription &&
        !props.currentUser.subscribed && (
          <New
            name="subscriptions"
            render={({ create, creating, error }) => {
              return (
                <Formik
                  initialValues={{
                    name: '',
                    number: '',
                    expiry: '',
                    cvc: '',
                    value: `${process.env.REACT_APP_SUB_PRICE},00`,
                  }}
                  validate={validate(props)}
                  onSubmit={createWithParams(create, props)}
                  render={renderForm({ ...props, creating, error })}
                />
              )
            }}
            renderCreated={() => {
              setCurrentUser({
                ...currentUser,
                subscribed: true,
              })

              return (
                <Redirect
                  to={`/albums/${routeProps.match.params.id}/premium/success`}
                />
              )
            }}
          />
        )}
      {!props.currentUser && (
        <Typography color="inherit">
          Você não está logado, se logue para continuar
        </Typography>
      )}
    </Dialog>
  )
}
