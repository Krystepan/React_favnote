import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.buttonColors.active};
    `}
`;

export default ButtonIcon;
