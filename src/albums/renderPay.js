import React from 'react'
import Dialog from 'materials/Dialog'
import { Formik } from 'formik'
import { New } from 'croods'
import renderForm from '../payments/form/render'
import validate from '../payments/form/validate'
import createWithParams from '../payments/createWithParams'

export default props => routeProps => {
  return (
    <Dialog {...props} {...routeProps} title="Torne-se premium">
      <New
        name="subscriptions"
        render={({ create, creating }) => {
          return (
            <Formik
              initialValues={{
                name: '',
                number: '',
                expiry: '',
                cvc: '',
                value: process.env.REACT_APP_SUB_PRICE + ',00',
              }}
              validate={validate(props)}
              onSubmit={createWithParams(create, props)}
              render={renderForm(props)}
            />
          )
        }}
        renderCreated={props => <div>Pagou</div>}
      />
    </Dialog>
  )
}
