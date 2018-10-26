import React from 'react'
import Grid from '@material-ui/core/Grid'

import NameStyle from './NameStyle'

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
      <NameStyle>Aldo Ometto</NameStyle>
      <NameStyle>Weber Amaral</NameStyle>
      <NameStyle>Juliana Sardinha</NameStyle>
      <NameStyle>Rosangela Sardinha</NameStyle>
      <NameStyle>Luiza Maia de Castro</NameStyle>
      <NameStyle>Isadora Ribeiro</NameStyle>
      <NameStyle>Tomás de Lara</NameStyle>
      <NameStyle>Manuela Yamada</NameStyle>
      <NameStyle>Bruno Temer</NameStyle>
      <NameStyle>Jéssica Galdino</NameStyle>
    </ul>
  </Grid>
)
