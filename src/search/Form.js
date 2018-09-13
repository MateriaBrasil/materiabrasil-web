import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

import TextField from '../form/TextField'
import onSubmit from './onSubmit'

export default reduxForm({ form: 'search', destroyOnUnmount: false })(
  class extends Component {
    constructor(props) {
      super(props)

      const { initialize, term } = props
      initialize({ term })
    }

    render() {
      const { handleSubmit, history, autoFocus } = this.props

      return (
        <form
          onSubmit={handleSubmit(onSubmit(history))}
          style={{ marginBottom: 10 }}
        >
          <Grid container spacing={0}>
            <Grid item xs>
              <TextField
                name="term"
                label="Pesquisar"
                type="text"
                autoFocus={autoFocus}
              />
            </Grid>
            <Grid item xs={1} md={3} style={{ paddingTop: 8 }}>
              <Button type="submit" style={{ minWidth: 0 }}>
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  },
)
