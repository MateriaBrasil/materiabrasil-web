import React, { Fragment } from 'react'
import { Info } from 'croods'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Album from '../users/info/Album'
import Private from './Private'

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
                  to={`/albums/${match.params.id}/member`}
                  style={{
                    textDecoration: 'none',
                    marginRight: 20,
                  }}
                >
                  <Button variant="contained" color="primary">
                    Compartilhar álbum
                  </Button>
                </Link>
              )}
              {isOwner &&
                (currentUser.subscribed ? (
                  <Private {...props} {...routeProps} />
                ) : (
                  <Link
                    to={`/albums/${match.params.id}/premium`}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <Private {...props} {...routeProps} />
                  </Link>
                ))}
              <Album {...album} />
            </Fragment>
          )
        }}
      />
    </Fragment>
  )
}
