import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 100%;
  margin-bottom: 40px;

  div {
    padding: 10px 0;
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

export const StyledRow = styled.div`
  /* .row-content {
    max-height: 80px;
    overflow-y: auto;
  } */
`;
