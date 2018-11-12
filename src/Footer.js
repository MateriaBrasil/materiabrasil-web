import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Colors from './Colors'
import FooterImage from './FooterImage'

const styles = theme => ({
  container: {
    backgroundColor: Colors.white,
    padding: '40px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },
  title: {
    height: 70,
    flexBasis: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 30,
      paddingLeft: 30,
      textAlign: 'left',
    },
  },
})

export default withStyles(styles)(props => (
  <div className={props.classes.container}>
    <div>
      <Typography variant="h4" className={props.classes.title}>
        Apoio
      </Typography>
      <FooterImage title="Instituto C&A" src="/images/partners/ic&a.png" />
    </div>
    <div>
      <Typography variant="h4" className={props.classes.title}>
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
      <Typography variant="h4" className={props.classes.title}>
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
))
