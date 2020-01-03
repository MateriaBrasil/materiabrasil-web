import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { api } from '../services/axios';
import Header from './header';
import MaterialsLoop from '../explorer/materialsLoop';
import Contact from '../contact/render';
import Breadcrumb from '../breadcrumb';

export default function renderCategorySingle(props) {
  const [data, setData] = useState({});
  const category = props.id;
  const categories = `categories%5B%5D=${category}`;

  useEffect(
    () => {
      api.get(`/categories/${category}`).then(response => {
        const data = response.data;
        setData(data);
      });
    },
    [category],
  );

  const items = [
    { to: '/', label: 'Explore' },
    // { to: '', label: 'Categorias' },
    // { to: '/contact', label: 'Reclicados' },
    { to: props.location, label: data.name },
  ];

  return (
    <Fragment>
      <div style={{ background: '#fff', paddingBottom: '50px' }}>
        <Header {...props} data={data} />
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

        <Container>
          <MaterialsLoop {...props} categories={categories} data={data} />
        </Container>
      </div>

      <Contact {...props} />
    </Fragment>
  );
}
