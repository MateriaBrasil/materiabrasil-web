import React, { Component } from 'react'
import { Edit } from 'croods'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default class extends Component {
  render() {
    return (
      <Edit
        id={this.props.match.params.id}
        name="editAlbum"
        path={`/albums/${this.props.match.params.id}`}
        render={({ info, update, updating, error }) => (
          <FormControlLabel
            control={
              <Switch
                style={{
                  pointerEvents: 'none',
                }}
                checked={info.private}
                onChange={() => {
                  update({
                    id: this.props.match.params.id,
                    private: !info.private,
                  })
                }}
              />
            }
            label="Tornar álbum privado"
          />
        )}
        renderUpdated={() => null}
      />
    )
  }
}
