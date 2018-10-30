import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ResponsiveGrid from '../ResponsiveGrid'

import gridStyle from '../gridStyle'
import Driver from './Driver'

export default withStyles(gridStyle)(props => (
  <ResponsiveGrid
    className={props.classes.grid}
    style={{
      marginTop: '5%',
      marginBottom: '5%',
    }}
  >
    <Driver
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-02.png"
      title="Processos"
      desc="Neste direcionador analisamos o processo de fabricação utilizado pela empresa e seus impactos."
    />
    <Driver
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-03.png"
      title="Matéria prima e produto"
      desc="Neste direcionador analisamos a composição do produto e a forma como foi projetado."
    />
    <Driver
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-04.png"
      title="Gestão e governança"
      desc="Neste direcionador analisamos como a empresa está estruturada e como se relaciona com seus colaboradores."
    />
    <Driver
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-05.png"
      title="Humano Social"
      desc="Neste direcionador analisamos como a empresa contribui para melhor a sociedade na qual está inserida."
    />
  </ResponsiveGrid>
))
