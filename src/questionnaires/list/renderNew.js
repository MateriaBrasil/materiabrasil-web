import React from 'react'
import List from './List'

export default props => ({ create }) => {
  const { questionnaires } = props
  return <List {...props} create={create} list={questionnaires} />
}
