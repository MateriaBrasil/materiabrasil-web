import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default ({ albums }) => (
  <List>
    {map(albums, ({ id, name }) => (
      <ListItem key={id} button>
        <ListItemText primary={name} />
      </ListItem>
    ))}
  </List>
)
