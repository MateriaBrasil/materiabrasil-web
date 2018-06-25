import React from 'react'

import Loading from '../../Loading'

export default ({ render }) => (currentUser, props) => {
  const { fetchingInfo, info, infoError } = props

  if (fetchingInfo || (!info && !infoError)) {
    return <Loading />
  }

  return render(info, props)
}
