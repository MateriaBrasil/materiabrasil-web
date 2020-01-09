import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;

  a {
    margin-right: 20px;
    cursor: pointer;
    font-family: 'Gotham Rounded', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    background: #eb8000;
    padding: 10px 25px;
    border-radius: 15px;

    &:last-child {
      background: #cb1e4b;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    a {
      margin-top: 10px;
      font-size: 17px;
      text-align: center;
      width: 100%;
    }
  }
`;
