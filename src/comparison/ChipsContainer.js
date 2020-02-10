import React from 'react';
import Media from 'react-media';

import Chips from './Chips';

export default ({ close, list, remove }) => (
  <Media query="(min-width: 991px)">
    {matches =>
      matches ? (
        <Chips
          close={close}
          list={list}
          alignItems="flex-start"
          remove={remove}
        />
      ) : (
        <Chips close={close} list={list} alignItems="center" remove={remove} />
      )
    }
  </Media>
);
