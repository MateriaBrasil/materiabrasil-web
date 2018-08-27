import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => () => {
  const { id } = props
  return <Redirect to={`/suppliers/${id}?reload=true`} />
}
