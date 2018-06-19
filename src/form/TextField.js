import React from 'react'
import { Field } from 'redux-form'

import Input from './Input'

export default props => {
  return <Field component={Input} {...props} />
}
