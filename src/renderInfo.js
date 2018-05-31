import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import Error from './Error'

export default props => {
  const { render, startingUp, requestingInfo, infoError } = props

  if (startingUp || requestingInfo) {
    return <LinearProgress />
  }

  if (infoError) {
    return <Error>{infoError}</Error>
  }

  return render(props)
}
