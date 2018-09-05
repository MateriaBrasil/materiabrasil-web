import React from 'react'

import Categories from './Categories'

export default props => (list, { actions }) => (
  <Categories
    {...props}
    materialCategories={list}
    setMaterialCategories={actions.setList}
  />
)
