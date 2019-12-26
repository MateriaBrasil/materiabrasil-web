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

export const MaterialsContainer = styled.div`
  max-width: 70%;
  width: 70%;
  margin: 0 auto;
`;

export const MaterialsList = styled.div`
  && {
    font-family: 'Open Sans', sans-serif !important;
    align-content: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .load_more_wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const MaterialSingle = styled(Link)`
  width: 33.3%;
  min-width: 295px;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  padding: 25px 5px;

  &:nth-of-type(1n) > .content_img_borda .borda {
    background: url(${borda_1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 88%;
    height: 87%;
  }

  &:nth-of-type(2n) > .content_img_borda .borda {
    background: url(${borda_2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 87%;
    height: 76%;
  }

  &:nth-of-type(3n) > .content_img_borda .borda {
    background: url(${borda_3});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 88%;
    height: 80%;
    bottom: 40px;
  }

  &:nth-of-type(4n) > .content_img_borda .borda {
    background: url(${borda_4});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 86%;
    height: 100%;
  }

  &:nth-of-type(5n) > .content_img_borda .borda {
    background: url(${borda_5});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 90%;
    height: 100%;
    right: 21px;
  }

  &:nth-of-type(6n) > .content_img_borda .borda {
    background: url(${borda_6});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 86%;
    right: 13px;
  }

  &:nth-of-type(7n) > .content_img_borda .borda {
    background: url(${borda_7});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 90%;
    left: 10px;
    height: 86%;
  }

  &:nth-of-type(8n) > .content_img_borda .borda {
    background: url(${borda_8});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 86%;
    height: 100%;
  }

  &:nth-of-type(9n) > .content_img_borda .borda {
    background: url(${borda_9});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 86%;
    height: 82%;
    left: 17px;
  }

  .content_img_borda {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 245px;
  }

  .borda {
    position: absolute;
    z-index: 1;
  }

  .img_loop {
    position: relative;
    z-index: 2;
    border-radius: 12px;
    background-image: url(${props => props.item.listImageUrl});
    background-size: cover;
    width: 80%;
    height: 180px;
  }

  .content_loop {
    padding: 0 10px;
    width: 90%;
    margin: 0 auto;
  }

  .content-material-single {
    .categories-wrapper {
      &:last-child {
        margin-right: 0px;
      }

      .span_category {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px;
        background: ${Colors.bondiBlue};
        padding: 5px;
        border-radius: 5px;
        color: ${Colors.white};
        font-size: 12px;
        font-weight: bolder;
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
    margin: 0px 0 20px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled.button`
  background: #eb8000;
  border-radius: 26px;
  height: 45px;
  width: 150px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
  border: none;
`;
