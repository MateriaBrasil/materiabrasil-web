import React from 'react'
import Loading from './Loading'

import Error from './Error'

export default props => {
  const { render, startingUp, requestingInfo, infoError } = props

  if (startingUp || requestingInfo) {
    return <Loading />
  }

  if (infoError) {
    return <Error>{infoError}</Error>
  }

  return render(props)
}
