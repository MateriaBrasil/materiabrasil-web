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

export default ({ list }) => (
  <List>
    {map(list, questionnaire => {
      const { name, questions } = questionnaire

      return (
        <ListItem key={name}>
          <Typography variant="headline">{name}</Typography>
          {map(questions, question => {
            const { options, description } = question

            return (
              <FormGroup key={description}>
                <Typography variant="subheading">{description}</Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    key={description}
                    aria-label="Questionnarie Options"
                    name="questionnaire-options"
                  >
                    {map(options, option => (
                      <FormControlLabel
                        value={toString(option.id)}
                        key={option.id}
                        disabled
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
      )
    })}
  </List>
)
