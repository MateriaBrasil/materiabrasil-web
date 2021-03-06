import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Input } from '@rocketseat/unform';

import search_icon from './search.png';

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 900;
    font-size: 80px;

    margin-bottom: 25px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
`;

export const StyledField = styled(Input)`
  && {
    ::-webkit-input-placeholder {
      /* Edge */
      color: #fff !important;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff !important;
    }

    ::placeholder {
      color: #fff !important;
    }

    font-size: 16px;
    border: 0;
    border-radius: 100px;
    padding-left: 20px;
    background: rgba(239, 239, 239, 0.68) 0% 0% no-repeat padding-box;
    font-weight: bold;
    height: 50px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto 40px;

    background-image: url(${search_icon});
    background-position: 95% 50%;
    background-size: 25px 25px;
    background-repeat: no-repeat;

    color: #ffffff !important;

    &:focus {
      outline: none;
    }
  }
`;

export const InfoIntroContainer = styled.div`
  && {
    padding-top: 100px;
    padding-bottom: 100px;
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    background-size: cover;
    background-position: center;

    .wrapper {
      max-width: 1000px;
      margin: 0 auto;
      p {
        font-size: 22px;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
      }

      .brand-imgs {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: baseline;
        justify-content: space-around;

        img {
          width: 200px;
        }
      }
    }
  }
`;
