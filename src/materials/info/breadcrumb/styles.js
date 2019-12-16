import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #414141;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    padding: 0 10px;
    text-align: center;
    font-size: 18px;
    &:last-child {
      color: #1791a0;
    }
  }
`;
