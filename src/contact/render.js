import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { api } from '../services/axios';
import ReactGA from 'react-ga';

import {
  Section,
  Container,
  Content,
  StyledTypography,
  StyledForm,
} from './styles';

export default function(props) {
  const [buttonLabel, setButtonLabel] = useState('Enviar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interesse, setInteresse] = useState('');

  const handleSubmit = async function(data) {
    console.log(data);
    setButtonLabel('Enviando');
    await api.post('/leads', data);
    setButtonLabel('Enviar');

    ReactGA.event({
      category: 'Formulário',
      action: 'Submit',
    });
    setName('');
    setEmail('');
    setPhone('');
    setInteresse('');
    props.snackbar.actions.setMessage('Mensagem envida com sucesso!');
  };

  const options = [
    {
      id: 'Sou Fornecedor e quero cadastrar meu material',
      title: 'Sou Fornecedor e quero cadastrar meu material',
    },
    {
      id: 'Dúvidas e sugestões na biblioteca de materiais',
      title: 'Dúvidas e sugestões na biblioteca de materiais',
    },
    {
      id: 'Interesse na compra de um produto',
      title: 'Interesse na compra de um produto',
    },
    { id: 'Outros assuntos', title: 'Outros assuntos' },
  ];

  return (
    <Section>
      <Container>
        <Content>
          {/*<StyledTypography variant="h4">Fale com a gente!</StyledTypography>*/}
          <p>
            Precisa de ajuda para encontrar o material sustentável que
            necessita? Quer conhecer melhor o nosso projeto e orientar melhor
            suas escolhas?
          </p>
          <p>Envie o seu contato, estamos sempre prontos a ajudar!</p>
        </Content>

        <StyledForm className="form">
          <Form onSubmit={handleSubmit}>
            <Input type="hidden" value="admin" name="mail_type" />
            <div>
              <label htmlFor="name">Nome*</label>
              <Input
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <Input
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone">Telefone*</label>
              <Input
                name="phone"
                type="text"
                maxLength="11"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="interesse">Qual seu interesse?*</label>
              <Select
                name="interesse"
                options={options}
                value={interesse}
                placeholder="Selecione um interesse"
                onChange={e => setInteresse(e.target.value)}
              />
            </div>

            <button type="submit">{buttonLabel}</button>
          </Form>
        </StyledForm>
      </Container>
    </Section>
  );
}
