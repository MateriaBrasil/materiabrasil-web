import React from 'react'
import map from 'lodash/map'
import Media from 'react-media'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import HelperIcon from '@material-ui/icons/Help'
import Tooltip from '@material-ui/core/Tooltip'
import renderOption from './renderOption'
import findAnswer from './findAnswer'
import findOption from './findOption'

const HelperText = ({ helperText }) =>
  !!helperText && (
    <Media query="(min-width: 991px)">
      {matches =>
        matches ? (
          <Tooltip title={helperText}>
            <HelperIcon
              color="primary"
              style={{
                margin: '0px 0 -3px 6px',
                fontSize: '18px',
              }}
            />
          </Tooltip>
        ) : (
          <Typography variant="caption" style={{ color: '#757575' }}>
            {helperText}
          </Typography>
        )
      }
    </Media>
  )

export default props => question => {
  const { options, description, helperText } = question

  const answer = findAnswer(props.questionnairesAnswers, question)
  const answerOption = findOption(answer, question)

  return (
    <FormGroup key={description} style={{ marginBottom: '40px' }}>
      <Typography variant="subtitle1">
        {description}
        <HelperText helperText={helperText} />
      </Typography>
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
