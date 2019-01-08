import React, { Fragment } from 'react'

import Link from 'albums/Link'
import TechnicalSpecification from './TechnicalSpecification'
import Colors from '../../Colors'

export default ({ currentUser, id, material, ...props }) => () => (
  <Fragment>
    {currentUser && <Link white id={id} />}
    <TechnicalSpecification
      {...material}
      style={{ color: Colors.white, marginRight: 16 }}
    />
  </Fragment>
)
