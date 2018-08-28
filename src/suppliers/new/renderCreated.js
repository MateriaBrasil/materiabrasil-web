import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => supplier => (
  <Redirect to={`/suppliers/${supplier.id}?reload=true`} />
)
