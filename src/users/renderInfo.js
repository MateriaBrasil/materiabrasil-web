import React from 'react'
import { Info } from 'croods'
import Redirect from 'react-router-dom/Redirect'

import render from './info/render'

export default props => routeProps => {
  const id = props.id || routeProps.match.params.id

  if (!id) {
    return (
      <Redirect
        to={{
          pathname: '/auth/sign-up',
          state: { referrer: '/profile' },
        }}
      />
    )
  }

  return (
    <Info id={id} name="users" render={render({ ...props, ...routeProps })} />
  )
}
