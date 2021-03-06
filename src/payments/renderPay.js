import React from 'react'
import Dialog from 'materials/Dialog'
import { Formik } from 'formik'
import { New } from 'croods'
import Redirect from 'react-router-dom/Redirect'
import renderForm from '../payments/form/render'
import validate from '../payments/form/validate'
import createWithParams from '../payments/createWithParams'
import UserMessages from './UserMessages'

export default props => routeProps => {
  const { setCurrentUser, currentUser } = props

  return (
    <Dialog {...props} {...routeProps} title="Torne-se premium">
      <UserMessages {...props} />
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
                  to={{
                    pathname: `${routeProps.location.state.url}/success`,
                    state: {
                      title: 'Assinatura criada',
                      message:
                        'Parabéns! Você ativou sua assinatura com sucesso.',
                      url: routeProps.location.state.url,
                    },
                  }}
                />
              )
            }}
          />
        )}
    </Dialog>
  )
}
