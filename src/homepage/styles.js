import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import bg_info_intro from './bg-info-intro.png';

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 900;
    font-size: 160px;
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
      max-width: 600px;
      margin: 0 auto;
      p {
        font-size: 22px;
        font-family: 'Open Sans', sans-serif;
      }

      .brand-imgs {
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
