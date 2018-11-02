import React, { Fragment } from 'react'

import NewFavorite from '../../favorites/New'
import TechnicalSpecification from './TechnicalSpecification'
import Colors from '../../Colors'

export default ({ currentUser, id, material, ...props }) => () => (
  <Fragment>
    {currentUser && (
      <NewFavorite id={id} style={{ color: Colors.white }} {...props} />
    )}
    <TechnicalSpecification
      {...material}
      style={{ color: Colors.white, marginRight: 16 }}
    />
  </Fragment>
)
