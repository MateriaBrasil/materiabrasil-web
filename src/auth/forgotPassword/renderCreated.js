import React from 'react'

import Redirect from 'react-router-dom/Redirect'

export default props => created => {
  return <Redirect to="/auth/forgot-password/sent" />
}
