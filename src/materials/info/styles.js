import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1280px;
  margin: 20px auto 0;
  font-family: 'Open Sans', sans-serif;

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
  display: flex;
  margin-top: 20px;
  div.block-img {
    width: 50%;
    img {
      width: 500px;
      margin-bottom: 20px;
    }
  }

  div.grafico-content {
    width: 48%;
    margin-left: auto;

    .grafico-help {
      display: flex;
      align-items: center;
      p {
        width: 60%;
      }
    }
  }
`;

export const SubContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  & > div {
    width: 48%;
  }
`;

export const Categories = styled.div`
  a.primary-button {
    margin-right: 10px;
  }
`;
