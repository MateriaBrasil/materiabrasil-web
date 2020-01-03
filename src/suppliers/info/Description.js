import React from 'react';
import { Link } from 'react-router-dom';

import { Description, DescriptionItem } from './styles';

export default function(props) {
  const { current, currentUser } = props;

  return currentUser ? (
    <Description>
      <DescriptionItem>
        <h3>Descrição</h3>
        <p>{current.description}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Alcance</h3>
        <p>{current.reach}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Site</h3>
        <a target="_blank" href={current.website}>
          {current.website}
        </a>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Email</h3>
        <p>{current.email}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Telefone</h3>
        <p>{current.phone}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Endereço</h3>
        <p>
          BR 153, Km 430, Loteamento Jardim Guanabara - 75053-640 Anápolis, GO,
          brasil
        </p>
      </DescriptionItem>
    </Description>
  ) : (
    <Description>
      <DescriptionItem>
        <h3>Descrição</h3>
        <p>{current.description}</p>
      </DescriptionItem>

      <DescriptionItem>
        <h3>Alcance</h3>
        <p>{current.reach}</p>
      </DescriptionItem>

      <p>
        <Link to={'/auth/sign-up'}>Cadastre-se</Link> para ver o contato do
        fornecedor.
      </p>
    </Description>
  );
}
