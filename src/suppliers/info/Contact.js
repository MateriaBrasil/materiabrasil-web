import React from 'react';
import { Link } from 'react-router-dom';

import { LoggedLinks, OwnerLinks } from './styles';

export default function(props) {
  const { current, currentUser } = props;

  const editable =
    (currentUser && current.userId === currentUser.id) ||
    (currentUser && currentUser.admin === true)
      ? true
      : false;

  const questionnaires_path = `/suppliers/${current.slug}/questionnaires`;
  const edit_path = `/suppliers/${current.id}/edit`;
  const message_path = `/suppliers/${current.id}/messages/new`;

  return !currentUser ? (
    <LoggedLinks>
      <Link to={questionnaires_path}>Questionários do Fornecedor</Link>
    </LoggedLinks>
  ) : !editable ? (
    <LoggedLinks>
      <Link to={questionnaires_path}>Questionários do Fornecedor</Link>
      <Link to={message_path}>Enviar Mensagem</Link>
    </LoggedLinks>
  ) : (
    <OwnerLinks>
      <Link to={questionnaires_path}>Questionários do Fornecedor</Link>
      <Link to={edit_path}>Editar Perfil</Link>
    </OwnerLinks>
  );
}
