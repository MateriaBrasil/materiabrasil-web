import React, { Fragment } from 'react'

import Members from '../../Members'
import Subtitle from '../../Subtitle'
import Paragraph from '../../Paragraph'
import membersList from './developersList'

export default () => {
  return (
    <Fragment>
      <Subtitle>Desenvolvedores</Subtitle>
      <Paragraph>
        Para o desenvolvimento desses direcionadores a MateriaMundi contou com
        uma equipe de consultores especialistas em diversas áreas.
      </Paragraph>
      <Paragraph>Conheça o nosso time!</Paragraph>
      <Members membersList={membersList} />
    </Fragment>
  )
}
