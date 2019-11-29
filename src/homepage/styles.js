import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Input } from '@rocketseat/unform';

import bg_info_intro from './bg-info-intro.png';
import search_icon from './search.png';

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 900;
    font-size: 80px;

    margin-bottom: 25px;
  }
`;

export const StyledField = styled(Input)`
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

export const InfoIntroContainer = styled.div`
  && {
    padding-top: 100px;
    padding-bottom: 100px;
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    background-image: url(${bg_info_intro});
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
