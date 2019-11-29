import styled from 'styled-components';
import Colors from '../Colors';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';

import borda_1 from './bordas/borda_1.png';
import borda_2 from './bordas/borda_2.png';
import borda_3 from './bordas/borda_3.png';
import borda_4 from './bordas/borda_4.png';
import borda_5 from './bordas/borda_5.png';
import borda_6 from './bordas/borda_6.png';
import borda_7 from './bordas/borda_7.png';
import borda_8 from './bordas/borda_8.png';
import borda_9 from './bordas/borda_9.png';

export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
`;

export const MaterialsList = styled.div`
  font-family: 'Open Sans', sans-serif !important;
  margin: 0 auto;
  max-width: 70%;
  align-content: baseline;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const MaterialSingle = styled(Link)`
  width: 33.3%;
  text-decoration: none;

  padding: 25px;

  &:first-child > .borda {
    background: url(${borda_1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(2) > .borda {
    background: url(${borda_2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(3) > .borda {
    background: url(${borda_3});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(4) > .borda {
    background: url(${borda_4});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(5) > .borda {
    background: url(${borda_5});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(6) > .borda {
    background: url(${borda_6});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(7) > .borda {
    background: url(${borda_7});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(8) > .borda {
    background: url(${borda_8});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:nth-of-type(9) > .borda {
    background: url(${borda_9});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .borda {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    & > img {
      width: 100%;
      transform: scale(1.3);
      border-radius: 5px;
    }
  }

  .content-material-single {
    .categories-wrapper {
      span {
        display: inline-block;
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
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
