import React, { Fragment } from 'react'

import Members from '../../Members'
import Title from '../../Title'
import Subtitle from '../../Subtitle'
import Paragraph from '../../Paragraph'
import developersList from './developersList'

export default () => {
  return (
    <Fragment>
      <Title>Desenvolvedores</Title>
      <Paragraph>
        Para o desenvolvimento desses direcionadores a MateriaMundi contou com
        uma equipe de consultores especialistas em diversas áreas.
      </Paragraph>
      <Subtitle>Conheça o nosso time!</Subtitle>
      <Members list={developersList} />
    </Fragment>
  )
}
