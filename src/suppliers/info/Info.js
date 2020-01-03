import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
import Link from 'react-router-dom/Link';
import { Helmet } from 'react-helmet';
import checkReloadAndFetch from '../../checkReloadAndFetch';
// import Addresses from '../../addresses/Addresses';
import InfoCard from './InfoCard';
import Profile from './Profile';
import Avatar from '../../imageUpload/Avatar';
import Breadcrumb from '../../breadcrumb';
import MaterialsLoop from './MaterialsLoop';

// import Materials from './Materials';
import { Container, MainContent, Materials } from './styles';

import Contact from './Contact';
import Description from './Description';

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props);
  }

  items = [
    { to: '/', label: 'Explore' },
    { to: this.props.location, label: this.props.current.name },
  ];

  render() {
    const { current, currentUser } = this.props;
    const { id, name, imageUrl } = current;

    return (
      <Container>
        <Helmet>
          <title>{name}</title>
          <meta property="og:image" content={imageUrl} />
        </Helmet>
        <div class="breadcrumb-wrapper">
          <Breadcrumb>
            {this.items.map(({ to, label }, index) => (
              <Link key={to} to={to}>
                {label}{' '}
                {this.items.length - 1 !== index && (
                  <span style={{ marginLeft: '10px' }}>></span>
                )}
              </Link>
            ))}
          </Breadcrumb>
        </div>
        <div>
          <MainContent>
            <h1>{current.name}</h1>
            <Avatar name={name} imageUrl={current.imageUrl} />
            <Contact current={current} currentUser={currentUser} />
          </MainContent>

          <Description {...this.props} />
        </div>

        <Materials>
          <h1>Materiais</h1>
          <MaterialsLoop current={current} />
        </Materials>

        {/* <Grid container spacing={32}>
          <Profile {...this.props} />
          <InfoCard {...this.props} />
          <Materials {...this.props} />
          <Addresses id={id} supplier={current} {...this.props} />
        </Grid> */}
      </Container>
    );
  }
}

export default Info;
