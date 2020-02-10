import React from 'react';
import Media from 'react-media';

import Chips from './Chips';

export default ({ goHome, list, remove }) => (
  <Media query="(min-width: 991px)">
    {matches =>
      matches ? (
        <Chips
          goHome={goHome}
          list={list}
          alignItems="flex-start"
          remove={remove}
        />
      ) : (
        <Chips
          goHome={goHome}
          list={list}
          alignItems="center"
          remove={remove}
        />
      )
    }
  </Media>
);
