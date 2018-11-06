import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import New from './New'
import NoCurrentUser from './NoCurrentUser'
import List from './List'

export default props => {
  const { currentUser } = props

  return (
    <Card>
      <CardContent>
        {currentUser ? <New {...props} /> : <NoCurrentUser {...props} />}
        <List {...props} />
      </CardContent>
    </Card>
  )
}
