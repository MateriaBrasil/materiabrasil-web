import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import Dialog from 'materials/Dialog'
import renderQuestionnaire from './renderQuestionnaire'

export default props => {
  const { questionnaires } = props

  return (
    <Dialog
      {...props}
      onCloseModel={() => {
        props.history.push(`/materials/${props.match.params.id}?reload=true`)
      }}
      title="Responder questionários"
    >
      <List style={{ width: '100%' }}>
        {map(questionnaires, renderQuestionnaire(props))}
      </List>
    </Dialog>
  )
}
