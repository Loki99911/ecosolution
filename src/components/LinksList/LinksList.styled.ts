import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const ListLink= styled(NavLink)`
  display: flex;
  gap: 8px;
`;