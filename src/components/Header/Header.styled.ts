import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 36px;
  width: 100%;
  @media screen and (min-width: 1280px) {
    top: 24px;
  }
`;
export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const MenuButton = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  background-color: #dcefd8;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #97d28b;
  }
`;

export const LinkToContactUs = styled(NavLink)`
  color: #97d28b;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  background-color: #97d28b;
  color: #173d33;
  svg:last-child {
    display: none;
  }

  &:hover {
    color: #97d28b;
    background-color: #173d33;
    svg:last-child {
      display: block;
    }
    svg:not(:last-child) {
      display: none;
    }
  }
`;
