import React from 'react'
import { reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

import TextField from '../form/TextField'

export default reduxForm({ form: 'search' })(props => {
  const { handleSubmit, history } = props

  return (
    <form
      onSubmit={handleSubmit(values =>
        history.push(`/search?term=${values.term}`),
      )}
    >
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <TextField name="term" label="Pesquisar" type="text" />
        </Grid>
        <Grid item xs={3} style={{ paddingTop: 8 }}>
          <Button type="submit" style={{ minWidth: 0 }}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  )
})
