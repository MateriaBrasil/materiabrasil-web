import React from 'react'
import { Field } from 'redux-form'

import Select from './Select'

export default props => {
  return <Field component={Select} {...props} />
}
