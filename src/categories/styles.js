import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import Filters from 'filters/Filters';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Paper from '@material-ui/core/Paper'

export const Container = styled.div``;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .home_page_explore && {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10px;
    background-image: linear-gradient(
      to right,
      #333 70%,
      rgba(255, 255, 255, 0) 20%
    );
    background-position: left bottom;
    background-size: 40px 1px;
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

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  .home_page_explore && {
    width: 100%;
    display: inline-block !important;
  }
`;

export const StyledPaper = styled(Paper)`
  .home_page_explore && {
    padding: 10px;
    box-shadow: none;
    background-color: transparent;
  }

  .home_page_explore &&:first-child{
    box-shadow: none;
  }
`;









