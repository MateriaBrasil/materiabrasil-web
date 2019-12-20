import React, { useState, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { api } from '../../../services/axios';
import ReactGA from 'react-ga';

import {
  StyledForm,
  Title4,
  Title5,
  StyledLink,
  ContainerLogout,
} from './styles';

export default function(props) {
  const { current, currentUser } = props;
  const [buttonLabel, setButtonLabel] = useState('Enviar');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async function(data) {
    setButtonLabel('Enviando');
    await api.post('/leads', data);
    setButtonLabel('Enviar');

    ReactGA.event({
      category: 'Formulário Produto',
      action: current.supplierName,
      label: current.name,
    });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    props.snackbar.actions.setMessage('Mensagem envida com sucesso!');
  };

  if (currentUser) {
    return (
      <Fragment>
        <Title4>Contato com o fornecedor deste material</Title4>
        <StyledForm>
          <Form onSubmit={handleSubmit}>
            <Title4>Mais informações do fornecedor:</Title4>
            <Link to={`/suppliers/${current.supplierSlug}`}>
              {current.supplierName}
            </Link>

            <Title4>Escreva sua mensagem</Title4>
            <Input
              type="hidden"
              value={current.supplierId}
              name="supplier_id"
            />
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
            <button type="submit">{buttonLabel}</button>
          </Form>
        </StyledForm>
      </Fragment>
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
