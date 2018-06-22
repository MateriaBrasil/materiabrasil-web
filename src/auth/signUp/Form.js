import React from 'react'
import { reduxForm } from 'redux-form'

import AuthForm from '../Form'

import fields from './fields'

const Form = props => {
  return <AuthForm callToAction="Registre-se" fields={fields} {...props} />
}

export default reduxForm({ form: 'signUp' })(Form)
