import React, { Fragment } from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'

export default ({ list }) => (
  <List>
    {map(list, questionnaire => {
      const { name, questions } = questionnaire
      const { options } = questions

      return (
        <ListItem button>
          <Typography variant="headline">{name}</Typography>
          {map(questions, question => (
            <Fragment>
              <Typography variant="subheading">
                {question.description}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="Questionnarie Options"
                  name="questionnaire-options"
                >
                  {map(options, option => (
                    <FormControlLabel
                      value={option.id}
                      disabled
                      control={<Radio />}
                      label={option.description}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Fragment>
          ))}
        </ListItem>
      )
    })}
  </List>
)
