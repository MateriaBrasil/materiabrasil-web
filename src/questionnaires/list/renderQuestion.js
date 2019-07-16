import React from 'react'
import map from 'lodash/map'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import renderOption from './renderOption'
import findAnswer from './findAnswer'
import findOption from './findOption'

export default props => question => {
  const { options, description } = question

  const answer = findAnswer(props.questionnairesAnswers, question)
  const answerOption = findOption(answer, question)

  return (
    <FormGroup key={description} style={{ marginBottom: '40px' }}>
      <Typography variant="subtitle1">{description}</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          key={description}
          aria-label="Questionnarie Options"
          name="questionnaire-options"
          value={answerOption ? answerOption.value.toString() : undefined}
        >
          {map(options, renderOption(props, question))}
        </RadioGroup>
      </FormControl>
    </FormGroup>
  )
}
