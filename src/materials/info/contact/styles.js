import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.div`
  && {
    background: #eaeaea;
    border-radius: 42px;
    padding: 25px;
    margin-bottom: 40px;

    form {
      flex-direction: column;
      display: flex;

      & > a {
        text-decoration: underline;
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

export const ContainerLogout = styled.div``;

export const StyledLink = styled(Link)`
  display: inline-block;

  background: #178e9d;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px 25px;
  margin-bottom: 20px;

  &:last-child {
    background: #eb8000;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;

  background: #178e9d;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px 25px;
  margin-bottom: 20px;

  &:last-child {
    background: #eb8000;
  }
`;

export const Title4 = styled.h4`
  && {
    font-size: 24px;
    margin: 10px 0;
    font-weight: bold;
  }
`;

export const Title5 = styled.h5`
  && {
    font-size: 22px;
    margin: 10px 0;
    font-weight: bold;
  }
`;

export const Editable = styled.div`
  && {
    display: flex;
    flex-wrap: wrap;

    a,
    button {
      background: #178e9d;
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      border-radius: 10px;
      text-decoration: none;
      padding: 10px 25px;
      margin-bottom: 10px;
      margin-right: 10px;
      text-transform: none;

      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
