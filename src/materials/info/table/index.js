import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import { StyledTable, StyledRow } from './styles';

import { api } from '../../../services/axios';

export default function(props) {
  const { current } = props;
  const { categories } = current;
  console.log(props);

  useEffect(() => {
    getAllCategories();
  }, []);

  const [visuais, setVisuais] = useState([]);
  const [tateis, setTateis] = useState([]);
  const [resistente, setResistente] = useState([]);
  const [forma, setForma] = useState([]);

  async function getAllCategories() {
    const data = await api.get('/categories/caracteristicas');
    const result = data.data;

    const compare_visuais = result['children'][0];
    const compare_tateis = result['children'][1];
    const compare_resistente = result['children'][2];
    const compare_forma = result['children'][3];

    const _visuais = _(compare_visuais.children)
      .differenceBy(categories, 'name')
      .map(_.partial(_.pick, _, 'name'))
      .value();

    setVisuais(_visuais.map(v => v.name));

    const _tateis = _(compare_tateis.children)
      .differenceBy(categories, 'name')
      .map(_.partial(_.pick, _, 'name'))
      .value();

    setTateis(_tateis.map(t => t.name));

    const _resistente = _(compare_resistente.children)
      .differenceBy(categories, 'name')
      .map(_.partial(_.pick, _, 'name'))
      .value();

    setResistente(_resistente.map(r => r.name));

    const _forma = _(compare_forma.children)
      .differenceBy(categories, 'name')
      .map(_.partial(_.pick, _, 'name'))
      .value();

    setForma(_forma.map(f => f.name));
  }

  return (
    <StyledTable>
      {/* <StyledRow>
        <span>Uso</span>
        <span>Têxtil</span>
      </StyledRow> */}

      {/* <StyledRow expanded={false}>
        <span>Forma</span>
        <span className="row-content">
          {forma &&
            forma.map(
              (f, index) => (index === forma.length - 1 ? `${f}` : `${f}, `),
            )}
        </span>
      </StyledRow>

      <StyledRow expanded={false}>
        <span>Visuais</span>
        <span className="row-content">
          {visuais &&
            visuais.map(
              (v, index) => (index === visuais.length - 1 ? `${v}` : `${v}, `),
            )}
        </span>
      </StyledRow>

      <StyledRow expanded={false}>
        <span>Tátei</span>
        <span className="row-content">
          {tateis &&
            tateis.map(
              (t, index) => (index === tateis.length - 1 ? `${t}` : `${t}, `),
            )}
        </span>
      </StyledRow>

      <StyledRow expanded={false}>
        <span>Resistente a</span>
        <span className="row-content">
          {resistente &&
            resistente.map(
              (r, index) =>
                index === resistente.length - 1 ? `${r}` : `${r}, `,
            )}
        </span>
      </StyledRow> */}

      {/* <StyledRow>
        <span>Processabilidade</span>
        <span>Têxtil</span>
      </StyledRow> */}

      <StyledRow>
        <span>Densidade/gramatura</span>
        <span>{current.density ? current.density : `N/A`}</span>
      </StyledRow>

      <StyledRow>
        <span>Anexo 1</span>
        <span>N/A</span>
      </StyledRow>
    </StyledTable>
  );
}
