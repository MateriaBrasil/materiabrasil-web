import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => () => {
  const { match } = props
  const { id } = match.params

  return <Redirect to={`/materials/${id}?reload=true`} />
}
