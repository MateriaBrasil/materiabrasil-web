import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => review => {
  const { match } = props
  const { params } = match
  const { id } = params

  return <Redirect to={`/supplier/${id}?reload=true`} />
}
