import React from 'react'
import { List } from 'croods'

import Dialog from 'materials/Dialog'
import renderList from './renderList'
import Expander from './Expander'

export default props => (
  <Expander
    {...props}
    render={controllerProps => (
      <Dialog {...controllerProps} title="Editar informações técnicas">
        <List name="categories" render={renderList(controllerProps)} />
      </Dialog>
    )}
  />
)
