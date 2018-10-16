import React from 'react'
import Media from 'react-media'

import Chips from './Chips'

export default ({ list, remove }) => (
  <Media query="(min-width: 991px)">
    {matches =>
      matches ? (
        <Chips list={list} alignItems="flex-start" remove={remove} />
      ) : (
        <Chips list={list} alignItems="center" remove={remove} />
      )
    }
  </Media>
)
