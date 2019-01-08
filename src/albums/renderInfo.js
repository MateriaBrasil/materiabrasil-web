import React from 'react'
import { Info } from 'croods'
import Album from '../users/info/Album'

export default props => routeProps => {
  const { match } = routeProps

  return (
    <Info
      name="albums"
      id="albums"
      path={`/albums/${match.params.id}`}
      render={album => <Album {...album} />}
    />
  )
}
