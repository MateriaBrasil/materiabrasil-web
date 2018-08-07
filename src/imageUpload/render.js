import React from 'react'
import { Edit } from 'croods'
import Redirect from 'react-router-dom/Redirect'

import ImageUpload from './ImageUpload'

export default props => routeProps => {
  const id = props.id

  return (
    <Edit
      id={id}
      name="users"
      render={editProps => (
        <ImageUpload {...props} {...routeProps} {...editProps} />
      )}
      renderUpdated={() => <Redirect to="/profile" />}
    />
  )
}
