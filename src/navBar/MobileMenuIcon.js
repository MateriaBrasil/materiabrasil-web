import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Colors from '../Colors'

export default props => (
  <MenuIcon
    style={{
      ...(props.isInstitutionalPage && {
        color: Colors.white,
      }),
    }}
  />
)
