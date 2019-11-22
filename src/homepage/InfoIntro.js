import React from 'react';

import MateriaBrasil from './MateriaBrasilLogo.png';
import MateriaMundi from './MateriaMundiLogo.png';

import { InfoIntroContainer } from './styles';

export default function() {
  return (
    <InfoIntroContainer>
      <div className="wrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no-
          nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        </p>
        <div className="brand-imgs">
          <img src={MateriaMundi} alt="Materia Mundi Logo" />
          <img src={MateriaBrasil} alt="Materia Brasil Logo" />
        </div>
      </div>
    </InfoIntroContainer>
  );
}
