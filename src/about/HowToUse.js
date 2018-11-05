import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SectionTitle from 'homepage/SectionTitle'
import Section from './Section'

export default props => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-2.png">Como usar</SectionTitle>
    <Section id="how_to_use">
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="h4">Usuário</Typography>
        <img
          src="images/infograph1.png"
          alt=""
          style={{ maxWidth: '800px', padding: '3%' }}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="h4">Fornecedor</Typography>
        <img
          src="images/infograph2.png"
          alt=""
          style={{ maxWidth: '800px', padding: '3%' }}
        />
      </Grid>
    </Section>
  </div>
)
