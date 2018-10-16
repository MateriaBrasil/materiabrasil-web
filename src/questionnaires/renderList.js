import React from 'react'
import { List } from 'croods'
import renderList from './list/render'

export default props => routeProps => {
  const { id } = routeProps.match.params

  return (
    <List
      id={id}
      name="questionnaires"
      path={`/questionnaires?about_type=${props.aboutType}`}
      render={renderList({ ...props, ...routeProps })}
    />
  )
}
