import React, { Fragment } from 'react'
import { Info, Edit } from 'croods'
import Switch from '@material-ui/core/Switch'
import Link from 'react-router-dom/Link'
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
              {isOwner && (
                <Link
                  to={`/albums/${match.params.id}/premium`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Edit
                    id={match.params.id}
                    name="editAlbum"
                    path={`/albums/${match.params.id}`}
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
                                id: match.params.id,
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
                </Link>
              )}
              <Album {...album} />
            </Fragment>
          )
        }}
      />
    </Fragment>
  )
}
