import React from 'react'
import map from 'lodash/map'
import List from '@material-ui/core/List'
import Dialog from 'materials/Dialog'
import renderQuestionnaire from './renderQuestionnaire'

export default props => {
  const { questionnaires } = props

  return (
    <Dialog {...props} title="Responder questionários" callToAction="Salvar">
      <List style={{ width: '100%' }}>
        {map(questionnaires, renderQuestionnaire(props))}
      </List>
    </Dialog>
  )
}
