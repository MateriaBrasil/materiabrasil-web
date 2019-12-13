import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { api } from '../services/axios';
import {
  Section,
  Container,
  Content,
  StyledTypography,
  StyledForm,
} from './styles';

export default function(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = function(data) {
    console.log(data);
    api.post('/leads', data);
    setName('');
    setEmail('');
    setPhone('');
    props.snackbar.actions.setMessage('Mensagem envida com sucesso!');
  };

  return (
    <Section>
      <Container>
        <Content>
          <StyledTypography variant="h4">Fale com a gente!</StyledTypography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            tempora a nobis velit delectus id rerum, architecto reprehenderit
            necessitatibus eaque consequuntur, nulla pariatur vitae dolorem.
          </p>
        </Content>

        <StyledForm className="form">
          <Form onSubmit={handleSubmit}>
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

            <button type="submit">Enviar</button>
          </Form>
        </StyledForm>
      </Container>
    </Section>
  );
}
