import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StyledTitle } from './styles';

import borda1 from './borda1.png';
import borda2 from './borda2.png';
import borda3 from './borda3.png';

import Colors from '../Colors';
import FooterImage from './FooterImage';

const styles = theme => ({
  section_footer: {
    backgroundColor: Colors.white,
    padding: '40px 0',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
    maxWidth: '1280px',
    margin: '0 auto',
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
});

export default withStyles(styles)(({ classes }) => (
  <div className={classes.section_footer}>
    <div className={classes.container}>
      <div>
        <StyledTitle
          style={{
            backgroundImage: `url(${borda1})`,
            marginRight: 'auto',
            marginBottom: '50px',
          }}
        >
          <span>Apoio</span>
        </StyledTitle>
        <FooterImage title="Instituto C&A" src="/images/partners/ica.png" />
      </div>
      <div>
        <StyledTitle
          style={{ backgroundImage: `url(${borda2})`, margin: '0 auto' }}
        >
          <span>Parceiros</span>
        </StyledTitle>
        <FooterImage title="Good Tech Lab" src="/images/partners/gtl.png" />
        <FooterImage
          title="Fab City Global"
          src="/images/partners/fab-city.png"
        />
        <FooterImage title="Materiom" src="/images/partners/materiom.png" />
        <FooterImage title="IED" src="/images/partners/ied.png" />
      </div>
      <div>
        <StyledTitle
          style={{
            backgroundImage: `url(${borda3})`,
            paddingBottom: '0',
            marginLeft: 'auto',
          }}
        >
          <span>Membro</span>
        </StyledTitle>
        {/* <FooterImage
          title="Sistema B Brasil"
          src="/images/partners/sistema-b.png"
        /> */}
        <FooterImage
          title="CE100 Global Ellen MacArthur"
          src="/images/partners/ce100.png"
        />
      </div>
    </div>
  </div>
));
