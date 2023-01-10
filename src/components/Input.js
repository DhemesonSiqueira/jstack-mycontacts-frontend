import styled, { css } from 'styled-components';

export const Input = styled.input`
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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    outline: 2px solid ${theme.colors.danger.main} !important;
  `};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    outline: 2px solid ${({ theme }) => theme.colors.gray[200]}};
  }

`;
