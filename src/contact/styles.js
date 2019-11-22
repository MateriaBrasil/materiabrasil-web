import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Section = styled.div`
  && {
    background: #efefef;
    font-family: 'Open Sans', sans-serif;
    padding: 40px 0;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  & > div {
    width: 46%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  /* margin: 0 auto; */
  && {
    margin-left: auto;
    display: flex;
    margin-top: 50px;
    flex-direction: column;
  }

  p {
    color: #212121;
    font-weight: 100;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const StyledForm = styled.div`
  && {
    color: #1a1a1a;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;

      button {
        margin-left: auto;
        background: #eb8000;
        border-radius: 26px;
        height: 45px;
        width: 150px;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        text-transform: uppercase;
        color: #fff;
        border: none;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;

        input {
          border: 1px solid #707070;
          background: transparent;
          padding-left: 25px;

          height: 40px;
          border-radius: 100px;
          width: 100%;

          &:focus {
            outline: none;
          }
        }

        label {
          margin-bottom: 5px;
          padding-left: 25px;
          font-weight: 100;
          text-transform: uppercase;
        }
      }
    }
  }
`;
