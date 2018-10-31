import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ResponsiveGrid from '../ResponsiveGrid'
import Subtitle from '../Subtitle'
import Paragraph from '../Paragraph'
import gridStyle from '../gridStyle'
import Symbol from './Symbol'

export default withStyles(gridStyle)(props => (
  <ResponsiveGrid
    className={props.classes.grid}
    style={{
      marginTop: '5%',
      marginBottom: '5%',
    }}
  >
    <Symbol imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-02.png" />
    <Subtitle>Materialidade</Subtitle>
    <Paragraph style={{ marginBottom: '5%' }}>
      Neste direcionador analisamos o processo de fabricação utilizado pela
      empresa e seus impactos.
    </Paragraph>
    <br />
    <Symbol imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-03.png" />
    <Subtitle>Manufatura</Subtitle>
    <Paragraph>
      Neste direcionador analisamos a composição do produto e a forma como foi
      projetado.
    </Paragraph>
    <br />
    <Symbol imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-04.png" />
    <Subtitle>Gestão e governança</Subtitle>
    <Paragraph>
      Neste direcionador analisamos como a empresa está estruturada e como se
      relaciona com seus colaboradores.
    </Paragraph>
    <br />
    <Symbol imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-05.png" />
    <Subtitle>Humano Social</Subtitle>
    <Paragraph>
      Neste direcionador analisamos como a empresa contribui para melhor a
      sociedade na qual está inserida.
    </Paragraph>
    <br />
  </ResponsiveGrid>
))
