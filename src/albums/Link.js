import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Tooltip from '@material-ui/core/Tooltip'
import Link from 'react-router-dom/Link'
import Colors from '../Colors'

export default props => (
  <Tooltip title={'Adicionar a um album'}>
    <Link
      to={`/materials/${props.id}/albums`}
      style={{
        textDecoration: 'none',
        padding: 12,
        verticalAlign: 'bottom',
        display: 'inline-block',
      }}
    >
      <BookmarkIcon
        style={{
          color: props.white ? Colors.white : Colors.black,
          verticalAlign: 'bottom',
        }}
      />
    </Link>
  </Tooltip>
)
