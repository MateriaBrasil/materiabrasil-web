import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1280px;
  margin: 20px auto 0;
  font-family: 'Open Sans', sans-serif;
  color: #414141;

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  input,
  textarea {
    font-family: 'Open Sans', sans-serif;
  }

  .primary-button {
    background: #1791a0;
    padding: 8.5px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    border-radius: 6px;
    display: inline-block;
    text-decoration: none;
  }
`;
export const MainContent = styled.div`
  && {
    display: flex;
    padding-bottom: 40px;
    margin-top: 20px;
    div.block-img {
      h1 {
        margin-bottom: 10px;
      }

      div.img-wrapper {
        margin-left: 20px;
        transform: rotate(-2deg) skew(1deg, 0deg);
        img {
          border-radius: 20px !important;
          width: 500px;
        }
      }
      width: 46%;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      & > div,
      & > div.block-img {
        width: 100%;
        padding: 0 20px;
      }
    }
  }
`;

export const Grafico = styled.div`
  width: 48%;
  margin-left: auto;

  h2 {
    font-weight: 600;
    font-size: 30px;
  }

  p {
    text-align: justify;
  }

  .grafico-help {
    display: flex;
    align-items: center;

    a {
      font-size: 20px;
      background: #178e9d;
      padding: 10px 20px;
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }

    p {
      width: 60%;
    }
  }
`;

export const Location = styled.div`
  p {
    font-size: 20px;
  }

  & > div {
    margin-bottom: 20px;
  }
`;

export const SubContent = styled.div`
  && {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h2 {
      margin: 10px 0;
      font-size: 22px;
    }
  }
`;

export const Categories = styled.div`
  a.primary-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledGrafico = styled.div`
  && {
    .text-char {
      color: #cb1e4b !important;
    }
  }
`;

export const StyledTable = styled.div`
  width: 100%;
  margin-bottom: 40px;

  div {
    padding: 10px;
    display: flex;

    &:not(:last-child) {
      border-bottom: 1px solid #cbe5e9;
    }

    span {
      width: 50%;
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      span {
        font-size: 14px;
      }
    }
  }
`;
