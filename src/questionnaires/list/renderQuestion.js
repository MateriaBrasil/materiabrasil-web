import React from 'react'
import map from 'lodash/map'
import Media from 'react-media'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HelperIcon from '@material-ui/icons/Help'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import renderOption from './renderOption'
import findAnswer from './findAnswer'
import findOption from './findOption'

const HelperText = ({ helperText }) => {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState(null)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    if (open) {
      setOpen(false)
      setTimeout(() => {
        setTitle(null)
      }, 100)
    } else {
      setTitle(helperText)
      setOpen(true)
    }
  }

  return (
    !!helperText && (
      <Media query="(min-width: 991px)">
        {matches =>
          matches ? (
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={title}
              >
                <span className="button-tip" onClick={handleTooltipOpen}>
                  <HelperIcon
                    color="primary"
                    style={{
                      margin: '0px 0 -3px 6px',
                      fontSize: '18px',
                    }}
                  />
                </span>
              </Tooltip>
            </ClickAwayListener>
          ) : (
            <Typography variant="caption" style={{ color: '#757575' }}>
              {helperText}
            </Typography>
          )
        }
      </Media>
    )
  )
}

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
