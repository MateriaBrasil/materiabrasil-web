import React from 'react'

import Grid from './Grid'
import SectionTitle from './SectionTitle'
import Video from '../Video'

export default () => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-1.png">A MateriaMundi</SectionTitle>

    <Grid id="how_to_use_it" title="Sobre" image="/images/polygon-1.png">
      <div style={{ paddingTop: '35%' }}>
        <Video />
      </div>
    </Grid>
  </div>
)
