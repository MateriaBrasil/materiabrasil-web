import React from 'react'
import { List } from 'croods'

import Dialog from 'materials/Dialog'
import renderList from './renderList'
import ToggleExpandController from './ToggleExpandController'

export default props => (
  <ToggleExpandController
    {...props}
    render={controllerProps => (
      <Dialog {...controllerProps} title="Editar informações técnicas">
        <List name="categories" render={renderList(controllerProps)} />
      </Dialog>
    )}
  />
)
