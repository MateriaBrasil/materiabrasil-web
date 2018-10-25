import React from 'react'
import Grid from '@material-ui/core/Grid'

import DriversName from './DriversName'

export default props => (
  <Grid
    item
    xs={12}
    style={{
      position: 'relative',
      padding: '0 0',
      margin: '0 0',
    }}
  >
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <DriversName>Aldo Ometto</DriversName>
      <DriversName>Weber Amaral</DriversName>
      <DriversName>Juliana Sardinha</DriversName>
      <DriversName>Rosangela Sardinha</DriversName>
      <DriversName>Luiza Maia de Castro</DriversName>
      <DriversName>Isadora Ribeiro</DriversName>
      <DriversName>Tomás de Lara</DriversName>
      <DriversName>Manuela Yamada</DriversName>
      <DriversName>Bruno Temer</DriversName>
      <DriversName>Jéssica Galdino"</DriversName>
    </ul>
  </Grid>
)
