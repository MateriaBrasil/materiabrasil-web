import React, { Fragment } from 'react'

import NewFavorite from '../../favorites/New'
import TechnicalSpecification from './TechnicalSpecification'

export default ({ currentUser, id, material }) => () => (
  <Fragment>
    {currentUser && <NewFavorite id={id} style={{ color: 'white' }} />}
    <TechnicalSpecification
      {...material}
      style={{ color: 'white', marginRight: 16 }}
    />
  </Fragment>
)
