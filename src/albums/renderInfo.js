import React, { Fragment } from 'react'
import { Info, Edit } from 'croods'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Album from '../users/info/Album'

export default props => routeProps => {
  const { match } = routeProps
  const { currentUser } = props

  return (
    <Fragment>
      <Info
        name="albums"
        id="albums"
        path={`/albums/${match.params.id}`}
        render={album => {
          const isOwner = currentUser && currentUser.id === album.userId

          return (
            <Fragment>
              <Edit
                id={match.params.id}
                name="editAlbum"
                path={`/albums/${match.params.id}`}
                render={({ info, update, updating, error }) => (
                  <FormControlLabel
                    control={
                      <Switch
                        disabled={!isOwner}
                        checked={info.private}
                        onChange={() => {
                          update({
                            id: match.params.id,
                            private: !info.private,
                          })
                        }}
                      />
                    }
                    label="Tornar album privado"
                  />
                )}
                renderUpdated={() => null}
              />
              <Album {...album} />
            </Fragment>
          )
        }}
      />
    </Fragment>
  )
}
