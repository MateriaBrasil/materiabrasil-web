import React, { useEffect, useState } from 'react';

import { StyledTable, StyledRow } from './styles';

export default function(props) {
  const { current } = props;

  const visuais = current.categories.filter(x => x.parentId === 243);
  const tateis = current.categories.filter(x => x.parentId === 250);
  const resistente = current.categories.filter(x => x.parentId === 257);
  const forma = current.categories.filter(x => x.parentId === 265);

  return (
    <StyledTable>
      {/* <StyledRow>
        <span>Uso</span>
        <span>Têxtil</span>
      </StyledRow> */}

      <StyledRow expanded={false}>
        <span>Forma</span>
        <span className="row-content">
          {forma.length > 0
            ? forma.map(
                (f, index) =>
                  index === forma.length - 1 ? `${f.name}` : `${f.name}, `,
              )
            : `N/A`}
        </span>
      </StyledRow>
      <StyledRow expanded={false}>
        <span>Visuais</span>
        <span className="row-content">
          {visuais.length > 0
            ? visuais.map(
                (v, index) =>
                  index === visuais.length - 1 ? `${v.name}` : `${v.name}, `,
              )
            : `N/A`}
        </span>
      </StyledRow>
      <StyledRow expanded={false}>
        <span>Tátei</span>
        <span className="row-content">
          {tateis.length > 0
            ? tateis.map(
                (t, index) =>
                  index === tateis.length - 1 ? `${t.name}` : `${t.name}, `,
              )
            : `N/A`}
        </span>
      </StyledRow>
      <StyledRow expanded={false}>
        <span>Resistente a</span>
        <span className="row-content">
          {resistente.length > 0
            ? resistente.map(
                (r, index) =>
                  index === resistente.length - 1 ? `${r.name}` : `${r.name}, `,
              )
            : `N/A`}
        </span>
      </StyledRow>

      {/* <StyledRow>
        <span>Processabilidade</span>
        <span>Têxtil</span>
      </StyledRow> */}
      <StyledRow>
        <span>Densidade/gramatura</span>
        <span>{current.density ? current.density : `N/A`}</span>
      </StyledRow>
      {/* <StyledRow>
        <span>Anexo 1</span>
        <span>N/A</span>
      </StyledRow> */}
    </StyledTable>
  );
}
