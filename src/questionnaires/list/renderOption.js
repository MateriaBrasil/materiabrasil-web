import React from 'react'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import createWithParams from './createWithParams'

export default (props, question) => option => (
  <FormControlLabel
    value={option.value}
    key={option.value}
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
