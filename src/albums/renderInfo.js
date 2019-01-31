import React, { Fragment } from 'react'
import { Info } from 'croods'
import Link from 'react-router-dom/Link'
import Album from '../users/info/Album'
import Private from './Private'
import Share from './Share'

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
              {isOwner &&
                (currentUser.subscribed ? (
                  <Fragment>
                    <Share {...props} {...routeProps} subscribed />
                    <Private {...props} {...routeProps} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <Share {...props} {...routeProps} subscribed={false} />
                    <Link
                      to={{
                        pathname: `/albums/${match.params.id}/premium`,
                        state: {
                          url: `/albums/${match.params.id}`,
                        },
                      }}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Private {...props} {...routeProps} />
                    </Link>
                  </Fragment>
                ))}
              <Album {...album} />
            </Fragment>
          )
        }}
      />
    </Fragment>
  )
}
