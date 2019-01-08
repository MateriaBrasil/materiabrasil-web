import React from 'react'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Loading from './Loading'

export default ({ onClick, creating, style, albumName }) =>
  creating ? (
    <Loading />
  ) : (
    <Tooltip title={'Adicionar á ' + albumName}>
      <Button onClick={onClick} style={style}>
        {albumName}
      </Button>
    </Tooltip>
  )
