import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import bg_orange from './bg_orange.png';
import bg_red from './bg_red.png';

import styled from 'styled-components';

export const DialogTitleExtended = styled(DialogTitle)`
  h6 {
    font-weight: lighter;
  }
`;

export const DialogContentExtend = styled(DialogContent)`
  ul {
    /* estilo do titulo de cada questionario */
    li h5 {
      font-family: 'Gotham Rounded';

      margin-left: -40px;
      display: flex;
      align-items: center;
      height: 80px;
      padding-top: 10px;
      margin-bottom: 10px;
      min-width: 300px;
      text-align: left;

      font-weight: bold;
      font-size: 24px;
      padding-left: 40px;
      padding-right: 40px;
      color: #fff !important;
    }

    /* background dos titulos de cada questionario */
    li:nth-child(odd) {
      h5 {
        background: url(${bg_red});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    li:nth-child(even) {
      h5 {
        background: url(${bg_orange});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  ul li:not(:last-of-type) {
    /* linha no final de cada Questionário */
    &::after {
      margin: 20px 0;
      content: ' ';
      display: block;
      background: #f49a27;
      height: 1px;
      width: 100%;
    }
    /* estilo das labels de cada questionario */
    > span {
      text-transform: uppercase;
      font-weight: lighter;
      font-size: 16px;
    }
  }

  ul li div h6 {
    /* linha no final de cada questão */
    &::before {
      margin: 20px 0;
      content: ' ';
      display: block;
      background: #f49a27;
      height: 1px;
      width: 30%;
    }
    /* estilos do titulo de cada questão */
    font-weight: bolder;
    font-size: 16px;
    line-height: 20px;
  }

  ul li div fieldset div {
    /* estilos de cada opição */
    label span:last-child {
      font-size: 14px;
      line-height: 17px;
      font-weight: lighter;
      padding: 10px 0;
    }
  }
`;
