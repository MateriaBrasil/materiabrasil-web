import React, { Fragment } from 'react'
import map from 'lodash/map'

import Member from './Member'

export default props => {
  return (
    <Fragment>
      {map(props.membersList, ({ id, name, image, job }) => {
        return <Member key={id} image={image} name={name} job={job} />
      })}
    </Fragment>
  )
}
