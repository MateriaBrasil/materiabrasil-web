import React from 'react';

import {
  Section,
  Container,
  Content,
  StyledTypography,
  StyledForm,
} from './styles';

export default function(props) {
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
          <form action="">
            <div>
              <label htmlFor="">Nome*</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Email*</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">Telefone*</label>
              <input type="text" />
            </div>

            <button type="submit">Enviar</button>
          </form>
        </StyledForm>
      </Container>
    </Section>
  );
}
