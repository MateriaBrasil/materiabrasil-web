import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '../../imageUpload/Avatar'
import Name from './Name'
import EditProfile from './EditProfile'
import AnswerQuestionnaire from './AnswerQuestionnaire'

export default props => {
  const { current, currentUser } = props
  const { userId, id, name, imageUrl } = current
  const editPath =
    currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
      <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
      <Name text={name} />
      <EditProfile currentUser={currentUser} supplier={current} />
      <AnswerQuestionnaire
        currentUser={currentUser}
        supplier={current}
        id={id}
      />
    </Grid>
  )
}
