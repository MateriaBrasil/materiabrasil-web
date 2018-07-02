import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

export default props => list => (
  <List>
    {map(list, ({ id, user: { name }, text }) => (
      <ListItem key={id} button>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <ListItemText primary={name} secondary={text} />
      </ListItem>
    ))}
  </List>
)
