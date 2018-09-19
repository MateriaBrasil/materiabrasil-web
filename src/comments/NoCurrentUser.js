import React from 'react'

import SignUpLink from '../auth/SignUpLink'

export default props => {
  const { location, term = 'comentário' } = props
  const { pathname } = location

  return <SignUpLink pathname={pathname} text={`para deixar ${term}s.`} />
}
