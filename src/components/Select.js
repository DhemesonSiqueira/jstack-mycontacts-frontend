import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 52px;
  border: none;
  background: #fff;
  padding: 0 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  outline: white;
  transition: outline-color 0.2s ease-in;
  appearance: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    outline: 2px solid ${({ theme }) => theme.colors.gray[200]}};
  }
`;
