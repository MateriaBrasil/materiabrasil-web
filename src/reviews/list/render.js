import React from 'react'

import List from './List'

export default props => list => {
  return <List {...props} list={list} />
}
