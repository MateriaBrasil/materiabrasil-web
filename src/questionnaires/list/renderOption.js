import React from 'react'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import createWithParams from './createWithParams'

export default (props, question) => option => (
  <FormControlLabel
    value={option.value}
    key={option.value}
    onChange={createWithParams(
      props.create,
      props.match.params.id,
      option.id,
      question.id,
    )}
    control={<Radio />}
    label={option.description}
  />
)
