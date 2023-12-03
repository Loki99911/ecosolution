import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: #173d33;
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
`;

export const MainText = styled.p`
  color: #173d33;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;
`;

export const LinkToLearnMore = styled(NavLink)`
  color: #173d33;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;

  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid #97d28b;
  background-color: transparent;

  &:hover {
    color: #97d28b;
    border: 1px solid #173d33;
    background-color: #173d33;
  }
`;
