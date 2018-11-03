import React from 'react'
import Grid from '@material-ui/core/Grid'

import Colors from './Colors'
import FooterImage from './FooterImage'

export default props => (
  <Grid container style={{ backgroundColor: Colors.white, padding: '40px 0' }}>
    <FooterImage
      headline="Apoio"
      title="Instituto C&A"
      src="/images/partners/ic&a.png"
      fullWidth
    />
    <FooterImage
      headline="Parceiros"
      title="Good Tech Lab"
      src="/images/partners/gtl.png"
    />
    <FooterImage title="Fab City Global" src="/images/partners/fab-city.png" />
    <FooterImage title="Materiom" src="/images/partners/materiom.png" />
    <FooterImage
      headline="Membro"
      title="Sistema B Brasil"
      src="/images/partners/sistema-b.png"
    />
    <FooterImage
      title="CE100 Global Ellen MacArthur"
      src="/images/partners/ce100.png"
    />
  </Grid>
)
