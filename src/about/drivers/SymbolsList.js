import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from '../gridStyle'
import Symbol from './Symbol'

export default withStyles(gridStyle)(props => (
  <Fragment>
    <Symbol
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-02.png"
      title="Materialidade"
      description="Neste direcionador analisamos o processo de fabricação utilizado pela
      empresa e seus impactos."
    />
    <Symbol
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-03.png"
      title="Manufatura"
      description="Neste direcionador analisamos a composição do produto e a forma como foi
      projetado."
    />
    <Symbol
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-04.png"
      title="Gestão e governança"
      description="Neste direcionador analisamos como a empresa está estruturada e como se
      relaciona com seus colaboradores."
    />
    <Symbol
      imageUrl="https://s3.amazonaws.com/materiamundi-us/static/icones/indicadores-05.png"
      title="Humano Social"
      description="Neste direcionador analisamos como a empresa contribui para melhor a
      sociedade na qual está inserida."
    />
  </Fragment>
))
