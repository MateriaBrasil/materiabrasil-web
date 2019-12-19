import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import {
  StyledForm,
  Title4,
  Title5,
  StyledLink,
  ContainerLogout,
} from './styles';

export default function(props) {
  const { current, currentUser } = props;
  if (currentUser) {
    return (
      <StyledForm>
        <form>
          <Title4>Mais informações do fornecedor:</Title4>
          <a to="#">{current.name}</a>

          <Title4>Escreva sua mensagem</Title4>

          <input type="text" name="name" placeholder="Nome*" />
          <input type="text" name="phone" placeholder="Nome*" />
          <input type="text" name="email" placeholder="Nome*" />
          <textarea name="message" placeholder="Sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </StyledForm>
    );
  } else {
    return (
      <ContainerLogout>
        <Title5>Contato com o fornecedor deste material</Title5>
        <StyledLink to="/auth/sign-in">Login</StyledLink>

        <Title5>Quer suporte para comprar esse material?</Title5>
        <StyledLink to="#">Enviar Mensagem</StyledLink>
      </ContainerLogout>
    );
  }
}
