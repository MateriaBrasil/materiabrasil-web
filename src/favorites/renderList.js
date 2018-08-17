import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import LinkToMaterial from '../materials/LinkToMaterial'
import TitleBar from '../materials/list/TitleBar'
import Destroy from './Destroy'

export default ({ showDestroy, parentId }) => list => (
  <GridList cellHeight={360}>
    {list.map(({ id, favoritable, destroying }, index) => {
      const { id: favoritableId, name, imageUrl } = favoritable
      const renderIcons =
        showDestroy &&
        (() => <Destroy parentId={parentId} id={id} destroying={destroying} />)

      return (
        <GridListTile key={id}>
          <LinkToMaterial id={favoritableId} imageUrl={imageUrl} name={name} />
          <TitleBar material={favoritable} renderIcons={renderIcons} />
        </GridListTile>
      )
    })}
  </GridList>
)
