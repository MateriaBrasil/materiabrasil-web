import React from 'react'
import { New } from 'croods'
import createWithParams from './createWithParams'

import Checkbox from './Checkbox'
import renderCreated from './renderCreated'

export default props => (
  <New
    name="materialCategories"
    path="/material_categories"
    render={({ create, creating }) => (
      <Checkbox {...props} action={createWithParams(create, props)} />
    )}
    renderCreated={renderCreated(props)}
  />
)
