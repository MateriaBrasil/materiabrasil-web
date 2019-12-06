import React from 'react';
import { Form } from '@rocketseat/unform';

import { StyledTypography, StyledField } from './styles';
import Grid from './Grid';

import bg from './bg_banner.png';

export default function() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Grid id="introduction" backgroundImage={`url(${bg})`}>
      <StyledTypography variant="h1">Materioteca</StyledTypography>
      <Form onSubmit={handleSubmit}>
        <StyledField
          name="material"
          type="text"
          placeholder="Pesquisar materials"
        />
        {/* <button type="submit">Pesquisar</button> */}
      </Form>
    </Grid>
  );
}
