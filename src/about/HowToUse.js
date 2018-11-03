import React from 'react'
import Grid from '@material-ui/core/Grid'

import SectionTitle from 'homepage/SectionTitle'
import Section from './Section'

export default props => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-2.png">Como usar</SectionTitle>
    <Section id="how_to_use">
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <img
          src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
          alt=""
          style={{ maxWidth: '100%', padding: '3%' }}
        />
      </Grid>
    </Section>
  </div>
)