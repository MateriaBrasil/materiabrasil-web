import React from 'react'

import Loading from '../../Loading'

export default ({ render }) => (currentUser, props) => {
  const { fetchingInfo, info } = props

  if (fetchingInfo) {
    return <Loading />
  }

  return render(info, props)
}
