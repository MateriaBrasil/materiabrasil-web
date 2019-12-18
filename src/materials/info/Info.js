import React, { Component, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import find from 'lodash/find';
import get from 'lodash/get';

import checkReloadAndFetch from '../../checkReloadAndFetch';
import Comments from '../../comments/Comments';
import Description from './Description';
import CoverImage from './CoverImage';
import Sidebar from './Sidebar';
import Images from './Images';
import Avatar from '../../imageUpload/Avatar';

import {
  Container,
  MainContent,
  Categories,
  StyledGrafico,
  SubContent,
  StyledForm,
} from './styles';

import Breadcrumb from './breadcrumb';
import Drivers from './Drivers';

export default class extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props);
    console.log(this.props);
  }

  items = [
    { to: '/', label: 'Explore' },
    { to: '', label: 'Categorias' },
    { to: '/contact', label: 'Reclicados' },
    { to: this.props.location, label: this.props.current.name },
  ];

  render() {
    const { current, currentUser } = this.props;
    const { id, supplierId, name, listImageUrl, slug } = current;
    const { suppliers } = currentUser || {};

    const editable =
      find(suppliers, supplier => supplier.id === supplierId) ||
      get(currentUser, 'admin', false);

    const editPath = editable && `/materials/${slug}/listImage`;

    return (
      <Fragment>
        <Helmet>
          <title>{name}</title>
          <meta property="og:image" content={listImageUrl} />
        </Helmet>
        <Container>
          <Breadcrumb>
            {this.items.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </Breadcrumb>

          <MainContent>
            <div className="block-img">
              <h1>{current.name}</h1>
              {(listImageUrl || editable) && (
                <Grid item xs={12} style={{ marginBottom: 16 }}>
                  <Avatar
                    name={name}
                    editPath={editPath}
                    imageUrl={listImageUrl}
                    width={500}
                    height={365}
                    preserveRatio
                  />
                </Grid>
              )}

              <Categories>
                {current.categoriesHasPage.map((categoriesHasPage, i) => (
                  <Link to="#" className="primary-button" key={i}>
                    {categoriesHasPage.name}
                  </Link>
                ))}
              </Categories>
            </div>
            <div className="grafico-content">
              <h2>Gráfico de Impacto</h2>
              <p>
                O gráfico de impacto mostra o resultado quantitativo dos
                questionários, respondidos pelos fornecedores cadastrados. Para
                entender melhor a respeito dos questionários, clique para vê-los
                na íntegra e entenda melhor o assunto abordado em cada um dos
                direcionadores.
              </p>

              <StyledGrafico className="grafico">
                <Drivers {...this.props} {...current} />
              </StyledGrafico>

              <div className="grafico-help">
                <p>
                  Com este gráfico, é possível comparar diversos materiais,
                  basta clicar no botão ao lado.
                </p>
                <Link className="primary-button" to="#">
                  Comparar Materiais
                </Link>
              </div>
            </div>
          </MainContent>
          <SubContent>
            <div>
              <h2>something</h2>
              <p>{current.description}</p>
            </div>
            <div>
              <h3>Disponibilidade</h3>
              <p>{current.availability}</p>

              {current.state && (
                <Fragment>
                  <h3>Local de produção</h3>
                  <p>{current.state}</p>
                </Fragment>
              )}
              <StyledForm>
                <form>
                  <h4>Mais informações do fornecedor:</h4>
                  <Link to="#">{current.name}</Link>

                  <h4>Escreva sua mensagem</h4>

                  <input type="text" name="name" placeholder="Nome*" />
                  <input type="text" name="phone" placeholder="Nome*" />
                  <input type="text" name="email" placeholder="Nome*" />
                  <textarea name="message" placeholder="Sua mensagem" />
                  <button type="submit">Enviar</button>
                </form>
              </StyledForm>
            </div>
          </SubContent>
        </Container>
        {/* <Grid container spacing={16}>
          {(coverImageUrl || editable) && (
            <CoverImage {...current} editable={editable} />
          )}
          {editable && <Images {...this.props} {...current} />}
          <Grid item xs={12} lg={7} style={{ marginBottom: 16 }}>
            <Description {...this.props} {...current} editable={editable} />
            <Comments id={id} type="materials" {...this.props} />
          </Grid>
          <Sidebar {...this.props} {...current} editable={editable} />
        </Grid> */}
      </Fragment>
    );
  }
}
