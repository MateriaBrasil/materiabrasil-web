import React from 'react'
import { List } from 'croods'

import Dialog from 'materials/Dialog'
import renderList from './renderList'

export default props => routeProps => (
  <Dialog {...props} {...routeProps} title="Editar informações técnicas">
    <List name="categories" render={renderList({ ...props, ...routeProps })} />
  </Dialog>
)
