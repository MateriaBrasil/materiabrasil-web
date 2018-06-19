import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

export default ({ input, meta, type = 'text', label, ...props }) => {
  const { touched, error } = meta

  return (
    <div>
      <FormControl
        error={touched && !!error}
        aria-describedby="name-error-text"
        fullWidth
      >
        <InputLabel htmlFor="name-error">{label}</InputLabel>
        <Input {...props} {...input} type={type} />
        <FormHelperText id="name-error-text">{touched && error}</FormHelperText>
      </FormControl>
    </div>
  )
}
