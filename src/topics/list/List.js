import React from 'react'
import Link from 'react-router-dom/Link'
import map from 'lodash/map'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'

import moment from '../../moment'

export default ({ list }) => (
  <Card>
    <List>
      {map(list, topic => {
        const { id, user, subject, createdAt } = topic
        const { firstName, lastName } = user
        const name = `${firstName} ${lastName}`

        return (
          <Link to={`/forum/${id}`} style={{ textDecoration: 'none' }} key={id}>
            <ListItem button>
              <Avatar>
                <PersonIcon />
              </Avatar>
              <ListItemText
                primary={subject}
                secondary={`Criado por ${name} há ${moment(
                  createdAt,
                ).fromNow()}`}
              />
            </ListItem>
          </Link>
        )
      })}
    </List>
  </Card>
)
