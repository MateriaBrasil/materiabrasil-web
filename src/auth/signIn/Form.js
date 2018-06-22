import React from 'react'
import { reduxForm } from 'redux-form'

import AuthForm from '../Form'

import fields from './fields'

const Form = props => {
  return <AuthForm callToAction="Login" fields={fields} {...props} />
}

export default reduxForm({ form: 'signIn' })(Form)
