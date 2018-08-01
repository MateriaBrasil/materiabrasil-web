import React from 'react'
import Redirect from 'react-router-dom/Redirect'

export default props => supplier => {
  console.log('created')
  return <Redirect to={`/`} />
}
