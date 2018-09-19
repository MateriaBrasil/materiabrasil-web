import React from 'react'
import Link from 'react-router-dom/Link'
import map from 'lodash/map'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

export default ({ list }) => (
  <Card>
    <List>
      {map(
        list,
        ({ id, user: { firstName, lastName, id: userId }, subject }) => {
          const name = `${firstName} ${lastName}`
          return (
            <Link
              to={`/users/${userId}`}
              style={{ textDecoration: 'none' }}
              key={id}
            >
              <ListItem button>
                <Avatar>
                  <PersonIcon />
                </Avatar>
                <ListItemText primary={subject} secondary={name} />
              </ListItem>
            </Link>
          )
        },
      )}
    </List>
  </Card>
)
