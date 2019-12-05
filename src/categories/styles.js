import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';
import Filters from 'filters/Filters';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Paper from '@material-ui/core/Paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';


export const Container = styled.div``;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .home_page_explore && {
    width: 100%;
    /* margin-left: 5%; */
    /* margin-right: 5%; */
    /* margin-bottom: 10px; */
      background-image: linear-gradient(
        to right,
        #333 70%,
        rgba(255, 255, 255, 0) 20%
      );
      background-position: left bottom;
      background-size: 40px 1px;
      background-repeat: repeat-x;


      &:last-child {
        background: none;
      }
  }

  span:first-child {
    /* padding-left: 0; */
  }
`;
export const StyledFilters = styled(Filters)`
  /* padding: 10px 0; */
`;

export const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  .home_page_explore && {
    width: 100%;
    display: inline-block !important;
  }
`;

export const StyledPaper = styled(Paper)`
&& {
  .home_page_explore && {
    padding: 10px;
    box-shadow: none;
    background-color: transparent;
  }

  .home_page_explore &&:first-child{
    box-shadow: none;
  }
}
`;
export const StyledExpansionPanel = styled(ExpansionPanel)`
  && {

    /* & .MuiIconButton-label-401 {
      display: none !important;
    } */

    width: 100%;

    background-image: linear-gradient(
      to right,
      #333 70%,
      rgba(255, 255, 255, 0) 20%
    );
    background-position: left bottom;
    background-size: 40px 1px;
    background-repeat: repeat-x;

    &:last-child {
      background: none;
    }

    &:before {
      display: none !important;
    }
  }
`
