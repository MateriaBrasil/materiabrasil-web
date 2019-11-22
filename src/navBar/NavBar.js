import React from 'react';
import { withRouter } from 'react-router';

import { StyledToolbar, StyledAppBar } from './styles';

import LinksOrMenu from './LinksOrMenu';

export default withRouter(props => {
  return (
    <StyledAppBar
      position={'absolute'}
      styles={{ backgroundColor: 'transparent' }}
      elevation={0}
    >
      <StyledToolbar>
        <LinksOrMenu {...props} />
      </StyledToolbar>
    </StyledAppBar>
  );
});
