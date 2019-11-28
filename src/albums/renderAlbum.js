import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import NewFavorite from '../favorites/New';

export default props => album => {
  return (
    <ListItem
      key={album.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <NewFavorite
        albumId={album.id}
        albumName={album.name}
        materialId={props.match.params.id}
        {...props}
      />
    </ListItem>
  );
};
