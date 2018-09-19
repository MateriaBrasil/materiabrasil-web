import React, { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import moment from '../../moment'
import Comments from '../../comments/Comments'

export default props => {
  const { id, user, subject, text, createdAt } = props
  const { firstName, lastName } = user
  const name = `${firstName} ${lastName}`

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant="display1" style={{ marginBottom: 8 }}>
            {subject}
          </Typography>
          <Typography variant="caption" style={{ marginBottom: 24 }}>
            {`Criado por ${name} há ${moment(createdAt).fromNow()}`}
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
      <Typography
        variant="headline"
        style={{ marginTop: 24, marginBottom: 24 }}
      >
        Respostas
      </Typography>
      <Comments id={id} type="topics" term="resposta" {...props} />
    </Fragment>
  )
}
