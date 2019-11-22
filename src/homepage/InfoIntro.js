import React from 'react';

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
          <img src="https://materiamundi.cc/images/logo.png" alt="" />
          <img src="https://materiamundi.cc/images/logo.png" alt="" />
        </div>
      </div>
    </InfoIntroContainer>
  );
}
