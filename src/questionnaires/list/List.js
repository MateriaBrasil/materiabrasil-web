import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'
import createWithParams from './createWithParams'
import findAnswer from './findAnswer'
import findOption from './findOption'

export default props => {
  const { questionnaires, questionnairesAnswers, create } = props

  return (
    <Dialog {...props} title="Responder questionários" callToAction="Salvar">
      <List style={{ width: '100%' }}>
        {map(questionnaires, questionnaire => (
          <ListItem
            key={questionnaire.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h5">{questionnaire.name}</Typography>
            {map(questionnaire.questions, question => {
              const { options, description } = question

              const answer = findAnswer(questionnairesAnswers, question)
              const answerOption = findOption(answer, question)

              return (
                <FormGroup key={description}>
                  <Typography variant="subtitle1">{description}</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      key={description}
                      aria-label="Questionnarie Options"
                      name="questionnaire-options"
                      value={answerOption ? answerOption.value : undefined}
                    >
                      {map(options, option => (
                        <FormControlLabel
                          value={option.value}
                          key={option.value}
                          onChange={createWithParams(
                            create,
                            props.match.params.id,
                            option.id,
                            question.id,
                          )}
                          control={<Radio />}
                          label={option.description}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormGroup>
              )
            })}
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
