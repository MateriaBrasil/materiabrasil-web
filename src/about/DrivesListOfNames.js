import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors';

export default props => (
  <Grid
    item
    xs={10}
    style={{
      position: 'relative',
      padding: '0 0',
      margin: '0 0',
    }}
  >
    <Typography
      variant="h4"
      color="inherit"
      padding="0 0"
      style={{
        color: Colors.white,
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: '5%',
        fontWeight: 300,
        marginLeft: '50%',
      }}
    >
      <ul>
        <li>
          <span>Aldo Ometto</span>
        </li>
        <li>
          <span>Weber Amaral</span>
        </li>
        <li>
          <span>Juliana Sardinha</span>
        </li>
        <li>
          <span>Rosangela Sardinha</span>
        </li>
        <li>
          <span>Luiza Maia de Castro</span>
        </li>
        <li>
          <span>Isadora Ribeiro</span>
        </li>
        <li>
          <span>Tomás de Lara</span>
        </li>
        <li>
          <span>Manuela Yamada</span>
        </li>
        <li>
          <span>Bruno Temer</span>
        </li>
        <li>
          <span>Jéssica Galdino"</span>
        </li>
      </ul>
    </Typography>
  </Grid>
)
