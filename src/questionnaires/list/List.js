import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import Dialog from 'materials/Dialog'
import renderQuestionnaire from './renderQuestionnaire'
import onCloseModel from './onCloseModel'

export default props => {
  const { questionnaires } = props

  return (
    <Dialog
      {...props}
      onCloseModel={onCloseModel(props)}
      title="Responder questionários"
    >
      <List style={{ width: '100%' }}>
        {map(questionnaires, renderQuestionnaire(props))}
      </List>
    </Dialog>
  )
}
