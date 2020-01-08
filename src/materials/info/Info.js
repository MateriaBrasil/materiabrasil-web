import React, { Component, Fragment } from 'react';
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

import { insert } from '../../helpers/index';

import {
  Container,
  MainContent,
  Categories,
  Grafico,
  StyledGrafico,
  SubContent,
  Location,
} from './styles';

import Contact from './contact';
import Table from './table';

import Breadcrumb from '../../breadcrumb';
import Drivers from './Drivers';

export default class extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props);
  }

  render() {
    const { current, currentUser } = this.props;

    const { id, supplierId, name, listImageUrl, slug } = current;
    const { suppliers } = currentUser || {};
    let items;

    const available_on_mkt = current.categories.find(
      x => x.name === 'Disponível no mercado',
    );
    const development = current.categories.find(
      x => x.name === 'Em desenvolvimento',
    );

    const disponivel = available_on_mkt || development ? true : false;

    items = [
      { to: '/', label: 'Explore' },
      { to: this.props.location.pathname, label: this.props.current.name },
    ];
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.category_name !== null) {
        const { category_name, category_slug } = this.props.location.state;
        insert(items, 1, {
          to: `/categories/${category_slug}`,
          label: category_name,
        });
      }
    }

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
            {items.map(({ to, label }, index) => (
              <Link key={to} to={to}>
                {label}{' '}
                {items.length - 1 !== index && (
                  <span style={{ marginLeft: '10px' }}>></span>
                )}
              </Link>
            ))}
          </Breadcrumb>
          <MainContent>
            <div className="block-img">
              <h1>{current.name}</h1>
              {(listImageUrl || editable) && (
                <Grid item xs={12} style={{ marginBottom: 40 }}>
                  <div className="img-wrapper">
                    <Avatar
                      name={name}
                      editPath={editPath}
                      imageUrl={listImageUrl}
                      width={500}
                      height={365}
                      preserveRatio
                    />
                  </div>
                </Grid>
              )}

              <Categories>
                {current.categoriesHasPage.map((categoriesHasPage, i) => (
                  <Link
                    to={`/categories/${categoriesHasPage.slug}`}
                    className="primary-button"
                    key={i}
                  >
                    {categoriesHasPage.name}
                  </Link>
                ))}
              </Categories>

              <SubContent>
                <div>
                  {/* <h2>Something</h2> */}
                  <p>{current.code}</p>
                  <p>{current.description}</p>
                </div>
              </SubContent>
              <div>
                <h3>Características</h3>
                <Table {...this.props} />
                {/* <div>
                  <h3>Observações técnicas</h3>
                  <p>
                    Produto não solta tinta e não desbota. Para limpeza deve ser
                    utilizado um pano levemente umedecido. Produto indicado para
                    confecção de calçados, inclusive vulcanizados, bolsas,
                    mochilas, cintos e acessórios em geral.
                  </p>
                </div> */}
              </div>
            </div>
            <Grafico>
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
              <Location>
                {disponivel && (
                  <div>
                    <h3>Disponibilidade</h3>
                    <p>{available_on_mkt && available_on_mkt.name}</p>
                    <p>{development && development.name}</p>
                  </div>
                )}

                {current.state && (
                  <div>
                    <h3>Local de produção</h3>
                    <p>{current.state}</p>
                  </div>
                )}
              </Location>
              <Contact editable={editable} {...this.props} />
            </Grafico>
          </MainContent>
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
