import React, { Fragment } from 'react'

import Link from 'albums/Link'
import TechnicalSpecification from './TechnicalSpecification'
import Colors from '../../Colors'

export default ({ currentUser, id, material, ...props }) => () => (
  <Fragment>
    {currentUser && <Link white id={id} />}
    {material.technicalSpecificationUrl != null &&
	    <TechnicalSpecification
	      {...material}
	      style={{ color: Colors.white, marginRight: 16 }}
	    />
	}
  </Fragment>
)
