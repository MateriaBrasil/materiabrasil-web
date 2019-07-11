import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import find from 'lodash/find'
import get from 'lodash/get'

import createWithParams from './createWithParams'

export default (props, question) => option => {
  const value = option.value ? option.value.toString() : ''
  const aboutId = props.match.params.id.toString()
  const supplier = get(props, 'currentUser.suppliers[0]', {})

  let editable = false

  if (props.aboutType === 'Supplier') {
    editable =
      get(supplier, 'id', '0').toString() === aboutId ||
      get(props, 'currentUser.admin', false)
  } else if (props.aboutType === 'Material') {
    editable =
      find(
        supplier.materials,
        material => get(material, 'id', '0').toString() === aboutId,
      ) || get(props, 'currentUser.admin', false)
  }

  return (
    <FormControlLabel
      value={value}
      key={option.value}
      disabled={!editable}
      onChange={createWithParams({
        create: props.create,
        aboutId: props.match.params.id,
        aboutType: props.aboutType,
        optionId: option.id,
        questionId: question.id,
      })}
      control={<Radio />}
      label={option.description}
    />
  )
}
