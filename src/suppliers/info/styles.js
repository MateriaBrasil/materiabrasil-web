import styled from 'styled-components';
import Link from 'react-router-dom/Link';
import borda_1 from '../../explorer/bordas/borda_5.png';
import borda_2 from '../../explorer/bordas/borda_1.png';

export const Container = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #414141;
  max-width: 1024px;
  margin: 0 auto;

  && > .breadcrumb-wrapper {
    margin: 20px auto 40px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span {
    margin: 0;
  }

  && > div {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const DescriptionItem = styled.div`
  h3 {
    font-size: 24px;
  }

  margin-bottom: 20px;
`;

export const LoggedLinks = styled.div`
  && {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    && > a {
      margin-bottom: 10px;
      background: #178e9d;
      padding: 10px 20px;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      justify-content: center;
      flex-direction: center;
      border-radius: 12px;
    }

    && > a:last-child {
      background: #eb8000;
    }
  }
`;

export const OwnerLinks = styled.div`
  && {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
      margin-bottom: 10px;
      background: #178e9d;
      padding: 10px 20px;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      justify-content: center;
      flex-direction: center;
      border-radius: 12px;
    }
  }
`;

export const MainContent = styled.div`
  width: 35%;
  margin-right: auto;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Description = styled.div`
  width: 55%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Materials = styled.div`
  margin-top: 40px;
  display: block !important;

  h1 {
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
      margin-left: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const MaterialsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MaterialSingle = styled(Link)`
  text-decoration: none;
  color: #414141;
  width: 50%;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    width: 382px;
    margin-left: 40px;
  }

  .content_img_borda {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 450px;
    height: 300px;
  }

  .borda {
    position: absolute;
    z-index: 1;
  }

  .img_loop {
    position: relative;
    z-index: 2;
    background-image: url(${props => props.item.listImageUrl});
    background-size: cover;
    width: 85%;
    height: 85%;
  }

  &:nth-of-type(1n) > .content_img_borda .borda {
    background: url(${borda_1});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  &:nth-of-type(2n) > .content_img_borda .borda {
    background: url(${borda_2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    .content_img_borda {
      max-width: 100%;
    }
  }
`;
