import styled from 'styled-components';
import background from './background.png';

export const Container = styled.div`
  && {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  margin-top: -20px;
  padding-top: 100px;
  margin: 0 auto 40px;

  font-family: 'Open Sans', sans-serif;
  color: #fff;
  text-align: center;

  & > .description {
    width: 100%;
    min-height: 200px;
    background-image: url(${background});
    padding-top: 100px;
    text-align: center;
    p {
      margin: 0 auto;
      max-width: 1000px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 50px;

    & > .description {
      padding-top: 75px;
      p {
        padding: 0 10px;
      }
    }
  }
`;
