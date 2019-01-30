import React, { Component } from 'react'
import { Edit } from 'croods'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default class extends Component {
  switch(info, update) {
    return (
      <Switch
        style={{
          pointerEvents: 'none',
        }}
        checked={this.props.publicProfile}
        onChange={() => {
          update({
            id: this.props.id,
            publicProfile: !this.props.publicProfile,
          })
        }}
      />
    )
  }
  render() {
    console.log(this.props)
    return (
      <Edit
        id={this.props.id}
        name="editAlbum"
        path={`/users/${this.props.id}`}
        render={({ info, update, updating, error }) => (
          <FormControlLabel
            control={this.switch(info, update)}
            label="Tornar perfil privado"
          />
        )}
        renderUpdated={() => null}
      />
    )
  }
}
