import React from 'react'
import isEmpty from 'lodash/isEmpty'
import negate from 'lodash/negate'

import ParentCategory from './ParentCategory'
import ChildrenCategory from './ChildrenCategory'

export const isPresent = negate(isEmpty)

export default props => category => {
  return isPresent(category.children) ? (
    <ParentCategory key={category.id} {...props} category={category} />
  ) : (
    <ChildrenCategory key={category.id} {...props} category={category} />
  )
}
