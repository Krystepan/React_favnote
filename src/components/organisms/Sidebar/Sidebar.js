import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import penIcon from '../../../assets/icons/pen.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.35fr 1fr 0.15fr;
  justify-content: center;
  width: 153px;
  height: 100vw;
  background-color: ${({ theme }) => theme.note};
`;

const MenuButtonsWrapper = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  height: 300px;
`;

const ExitButtonWrapper = styled.div`
  /* display: flex; */
`;

const Sidebar = () => (
  <StyledWrapper>
    <p>logo</p>
    <MenuButtonsWrapper>
      <ButtonIcon as={Link} to="/" icon={penIcon} active />
      <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
    </MenuButtonsWrapper>
    <ExitButtonWrapper>
      <ButtonIcon as={Link} to="/" icon={logoutIcon} />
    </ExitButtonWrapper>
  </StyledWrapper>
);

export default Sidebar;
