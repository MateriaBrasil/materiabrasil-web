import React from 'react'

import Dialog from 'materials/Dialog'
import Reviews from './Reviews'

export default props => (
  <Dialog {...props} title="Avaliações">
    <Reviews list={props.list} />
  </Dialog>
)
