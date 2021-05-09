import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import penIcon from '../../../assets/icons/pen.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logo from '../../../assets/logo.svg';

const StyledWrapper = styled.nav`
  display: grid;
  position: fixed;
  left: 0;
  top: 0;
  grid-template-rows: 0.35fr 1fr 0.15fr;
  justify-content: center;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const MenuButtonsWrapper = styled.div`
  height: 300px;
  list-style-type: none;
`;

const ExitButtonWrapper = styled.div`
  transform: rotate(180deg);
`;

const Logo = styled.div`
  display: grid;
  background: url(${logo}) no-repeat;
  background-size: 150%;
  background-position: 50% 0;
  margin-top: 4rem;
  cursor: pointer;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <Logo as={NavLink} to="/" />
    <MenuButtonsWrapper>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </MenuButtonsWrapper>
    <ExitButtonWrapper>
      <ButtonIcon as={Link} to="/login" icon={logoutIcon} />
    </ExitButtonWrapper>
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.element.isRequired,
};

export default Sidebar;
