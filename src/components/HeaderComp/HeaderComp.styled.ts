import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
`;

export const ListLink= styled(NavLink)`
  display: flex;
  gap: 8px;
`;