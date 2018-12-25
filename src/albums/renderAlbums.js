import React from 'react'
// import map from 'lodash/map'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
// import renderQuestion from './renderQuestion'

export default props => album => {
  const { name, questions } = album

  return (
    <ListItem
      key={album.name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography variant="h5">{name}</Typography>
      {/* {map(questions, renderQuestion(props))} */}
    </ListItem>
  )
}
