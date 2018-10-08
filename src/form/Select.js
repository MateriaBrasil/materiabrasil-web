import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

export default ({ input, meta, options, ...props }) => {
  const { touched, error } = meta

  return (
    <FormControl
      error={touched && !!error}
      aria-describedby="name-error-text"
      fullWidth
    >
      <TextField
        fullWidth
        select
        {...input}
        {...props}
        error={touched && !!error}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <FormHelperText id="name-error-text">{touched && error}</FormHelperText>
    </FormControl>
  )
}
