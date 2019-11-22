import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

export const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: center;
  }
`;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: transparent;
    box-shadow: none;
  }
`;
