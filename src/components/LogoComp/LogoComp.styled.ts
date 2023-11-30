import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
  color: #173d33;
  font-family: Fontspring, sans-serif;
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;

  display: flex;
  gap: 8px;
  align-items: baseline;
  &:hover {
    color: red;
  }
`;
