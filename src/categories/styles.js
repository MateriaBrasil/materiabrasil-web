import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import Filters from 'filters/Filters';

export const Container = styled.div``;

export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 20px;

    background-image: linear-gradient(
      to right,
      #333 40%,
      rgba(255, 255, 255, 0) 20%
    );
    background-position: left bottom;
    background-size: 25px 1px;
    background-repeat: repeat-x;
  }

  span:first-child {
    padding: 10px;
    padding-left: 0;
  }
`;
export const StyledFilters = styled(Filters)`
  padding: 10px 0;
`;
