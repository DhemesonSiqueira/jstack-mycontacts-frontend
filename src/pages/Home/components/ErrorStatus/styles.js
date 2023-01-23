import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      font-size: 22px;
      margin-bottom: 8px;
    }
  }
`;
