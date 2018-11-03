import React, { Fragment } from 'react'
import map from 'lodash/map'

import Member from './Member'

export default ({ list, ...props }) => {
  return (
    <Fragment>
      {map(list, ({ id, name, image, job }) => {
        return (
          <Member key={id} image={image} name={name} job={job} {...props} />
        )
      })}
    </Fragment>
  )
}
