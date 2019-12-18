import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1280px;
  margin: 20px auto 0;
  font-family: 'Open Sans', sans-serif;

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

export const StyledGrafico = styled.div`
  && {
    .text-char {
      color: #cb1e4b !important;
    }
  }
`;

export const StyledForm = styled.div`
  && {
    background: #eaeaea;
    color: #414141;
    border-radius: 42px;
    padding: 25px;

    form {
      flex-direction: column;
      display: flex;

      h4 {
        font-size: 24px;
        font-weight: bold;
      }

      & > a {
        font-size: 18px;
        color: #434343;
        font-weight: 600;
        text-transform: uppercase;
      }

      input,
      textarea {
        ::-webkit-input-placeholder {
          /* Edge */
          color: #6a6a6a !important;
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #6a6a6a !important;
        }

        ::placeholder {
          color: #6a6a6a !important;
        }

        padding-left: 10px;
        background: #fff;
        color: #6a6a6a;
        width: 100%;
        margin-bottom: 20px;
        border-radius: 12px;
        border: 0;
      }

      input {
        height: 40px;
      }

      textarea {
        height: 100px;
        padding-top: 10px;
      }

      button {
        margin-left: auto;
        background: #eb8000;
        border-radius: 13px;
        height: 43px;
        width: 116px;
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        border: none;
      }
    }
  }
`;
