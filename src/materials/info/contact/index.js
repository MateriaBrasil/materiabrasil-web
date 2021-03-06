import React, { useState, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { api } from '../../../services/axios';
import ReactGA from 'react-ga';

import TechnicalSpecificationUpload from '../TechnicalSpecificationUpload';
import CertificationsUpload from '../CertificationsUpload';
import DeleteButton from '../DeleteButton';
import Publish from '../Publish';

import {
  Editable,
  StyledForm,
  Title4,
  Title5,
  StyledLink,
  StyledButton,
  ContainerLogout,
} from './styles';

export default function(props) {
  const { current, editable, currentUser } = props;
  const { slug } = props.info;
  const [buttonLabel, setButtonLabel] = useState('Enviar');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async function(data) {
    setButtonLabel('Enviando');
    const { name, phone, email, message } = data;
    const text = `mensagem: ${message}, email: ${email}, telefone: ${phone}`;
    const formatted_data = {
      name,
      phone,
      email,
      text,
      msg: message,
      mail_type: 'supplier',
      supplier_id: current.supplierId,
      from_type: 'User',
      to_type: 'Supplier',
      from_id: currentUser.id,
      to_id: current.supplierId,
    };

    await api.post('/leads', formatted_data);
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

  const sendMessage = async function() {
    const url = window.location.href;
    const name = currentUser.firstName;
    const email = currentUser.email;
    const mail_type = 'automatic_message';
    const data = {
      url,
      name,
      email,
      mail_type,
    };
    await api.post('/leads', data);
    props.snackbar.actions.setMessage('Mensagem envida com sucesso!');
  };

  if (editable) {
    return (
      <Editable>
        <br />
        <Publish {...props} />
        <Link to={`/materials/${slug}/edit`}>Editar informações gerais</Link>
        <Link to={`/materials/${slug}/categories`}>
          Editar informações técnicas
        </Link>
        <TechnicalSpecificationUpload {...props} />
        <CertificationsUpload {...props} />
        <DeleteButton {...props} label="Deletar Material" />
      </Editable>
    );
  } else if (currentUser) {
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
              type="text"
              name="name"
              placeholder="Nome*"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="text"
              name="phone"
              maxLength="11"
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
              placeholder="Sua Mensagem"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">{buttonLabel}</button>
          </Form>
        </StyledForm>

        <Title5>Quer suporte para comprar esse material?</Title5>
        <StyledButton onClick={sendMessage}>Enviar Mensagem</StyledButton>
      </Fragment>
    );
  } else {
    return (
      <ContainerLogout>
        <Title5>Contato com o fornecedor deste material</Title5>
        <StyledLink to="/auth/sign-in">Login</StyledLink>
      </ContainerLogout>
    );
  }
}
