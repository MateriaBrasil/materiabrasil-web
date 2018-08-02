import React from 'react'
import Link from 'react-router-dom/Link'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

import Rating from '../Rating'

export default ({ list }) => (
  <List>
    {map(
      orderBy(list, ['rating'], ['desc']),
      ({ id, user: { name, id: userId }, text, rating }) => (
        <Link
          to={`/user/${userId}`}
          style={{ textDecoration: 'none' }}
          key={id}
        >
          <ListItem button>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <ListItemText primary={name} secondary={text} />
            <Rating rating={rating} />
          </ListItem>
        </Link>
      ),
    )}
  </List>
)
