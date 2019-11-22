import styled from 'styled-components';
import Colors from '../Colors';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';

import search_icon from './search.png';

export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
`;

export const MaterialsList = styled.div`
  font-family: 'Open Sans', sans-serif !important;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const MaterialSingle = styled(Link)`
  width: 33.3%;
  text-decoration: none;

  padding: 25px;

  & > img {
    width: 100%;
    border-radius: 5px;
  }
  .content-material-single {
    .categories-wrapper {
      span {
        margin-right: 20px;
        background: ${Colors.bondiBlue};
        padding: 5px;
        border-radius: 5px;
        color: ${Colors.white};
      }
    }

    .icons {
      text-align: right;

      img {
        margin-right: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    margin: 20px 0;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const StyledField = styled.input`
  && {
    font-size: 16px;
    border: 0;
    border-radius: 100px;
    padding-left: 20px;
    background: #efefef;
    height: 50px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto 40px;

    background-image: url(${search_icon});
    background-position: 95% 50%;
    background-size: 25px 25px;
    background-repeat: no-repeat;

    &:focus {
      outline: none;
    }
  }
`;
