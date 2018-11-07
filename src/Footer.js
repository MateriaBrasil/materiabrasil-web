import React from 'react'
import Typography from '@material-ui/core/Typography'

import Colors from './Colors'
import FooterImage from './FooterImage'

const style = {
  paddingTop: 30,
  paddingLeft: 30,
  height: 70,
  flexBasis: '100%',
  textAlign: 'left',
}

export default props => (
  <div
    style={{
      backgroundColor: Colors.white,
      padding: '40px 0',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <Typography variant="h4" style={style}>
        Apoio
      </Typography>
      <FooterImage title="Instituto C&A" src="/images/partners/ic&a.png" />
    </div>
    <div>
      <Typography variant="h4" style={style}>
        Parceiros
      </Typography>
      <FooterImage title="Good Tech Lab" src="/images/partners/gtl.png" />
      <FooterImage
        title="Fab City Global"
        src="/images/partners/fab-city.png"
      />
      <FooterImage title="Materiom" src="/images/partners/materiom.png" />
      <FooterImage title="IED" src="/images/partners/ied.png" />
    </div>
    <div>
      <Typography variant="h4" style={style}>
        Membro
      </Typography>
      <FooterImage
        title="Sistema B Brasil"
        src="/images/partners/sistema-b.png"
      />
      <FooterImage
        title="CE100 Global Ellen MacArthur"
        src="/images/partners/ce100.png"
      />
    </div>
  </div>
)
