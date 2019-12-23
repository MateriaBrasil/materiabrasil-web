import React, { Component, Fragment } from 'react';
// import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import checkReloadAndFetch from '../../checkReloadAndFetch';
import { Link } from 'react-router-dom';
// import Addresses from '../../addresses/Addresses';
import InfoCard from './InfoCard';
import Profile from './Profile';
import Avatar from '../../imageUpload/Avatar';

// import Materials from './Materials';
import { Container, MainContent, Description, Materials } from './style';

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props);
  }

  render() {
    const { current } = this.props;
    const { id, name, imageUrl } = current;

    return (
      <Container>
        <Helmet>
          <title>{name}</title>
          <meta property="og:image" content={imageUrl} />
        </Helmet>
        <div>
          <MainContent>
            <h1>{current.name}</h1>
            <Avatar
              name={name}
              imageUrl="https://image.ibb.co/bPMTky/tecido.jpg"
            />
            <div>
              <Link to="#">Questionários do Fornecedor</Link>
              <Link to="#">Enviar Mensagem</Link>
            </div>
          </MainContent>

          <Description>
            <div>
              <h3>Descrição</h3>
              <p>{current.description}</p>
            </div>

            <div>
              <h3>Alcance</h3>
              <p>{current.reach}</p>
            </div>

            <div>
              <h3>Site</h3>
              <a href={current.website}>{current.website}</a>
            </div>

            <div>
              <h3>Email</h3>
              <p>{current.email}</p>
            </div>

            <div>
              <h3>Telefone</h3>
              <p>{current.phone}</p>
            </div>

            <div>
              <h3>Endereço</h3>
              <p>
                BR 153, Km 430, Loteamento Jardim Guanabara - 75053-640
                Anápolis, GO, brasil
              </p>
            </div>
          </Description>
        </div>

        <Materials>
          <h1>Materials</h1>
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
