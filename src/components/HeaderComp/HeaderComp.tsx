import LogoComp from "../LogoComp/LogoComp";
import { Header } from "./HeaderComp.styled";
import { IProps } from "./types";

export default function HeaderComp({ onCloseModal }:IProps) {
  return <Header>
    <div>
      <LogoComp />
      <button type="button" onClick={onCloseModal}>MENU</button>
    </div>
  </Header>;
}
