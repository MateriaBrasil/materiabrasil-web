import React from 'react'

import List from '../../materials/list/List'

export default props => (list, listProps) => (
  <List list={list} {...props} listProps={listProps} />
)
