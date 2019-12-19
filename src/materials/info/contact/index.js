import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { api } from '../../../services/axios';

import {
  StyledForm,
  Title4,
  Title5,
  StyledLink,
  ContainerLogout,
} from './styles';

export default function(props) {
  const { current, currentUser } = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = function(data) {
    console.log(data);

    api.post('/leads', data);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    props.snackbar.actions.setMessage('Mensagem envida com sucesso!');
  };

  if (currentUser) {
    return (
      <StyledForm>
        <Form onSubmit={handleSubmit}>
          <Title4>Mais informações do fornecedor:</Title4>
          <Link to={`/suppliers/${current.supplierSlug}`}>{current.name}</Link>

          <Title4>Escreva sua mensagem</Title4>
          <Input type="hidden" value={current.supplierId} name="supplier_id" />
          <Input type="hidden" value="supplier" name="mail_type" />
          <Input
            type="text"
            name="name"
            placeholder="Nome*"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Telefone*"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email*"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="text"
            multiline
            name="message"
            maxLength="11"
            placeholder="Sua Mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </Form>
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
