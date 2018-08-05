import React from 'react'
import { Edit } from 'croods'
import Redirect from 'react-router-dom/Redirect'

import render from './edit/render'

export default props => routeProps => {
  console.log(props)
  // const id = props.id || routeProps.match.params.id

  // if (!id) {
    // return (
  //     <Redirect
  //       to={{
  //         pathname: '/auth/sign-up',
  //         state: { referrer: '/profile' },
  //       }}
  //     />
  //   )
  // }

  return (
    <Edit
      // id={id}
      name="users"
      path="/auth"
      render={render({ ...props, ...routeProps })}
      renderUpdated={() => <Redirect to="/profile" />}
    />
  )
}
