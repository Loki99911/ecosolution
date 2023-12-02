import { useMediaRules } from "../../hooks/MediaRules";
import LogoComp from "../LogoComp/LogoComp";
import SVGFromSprite from "../SVGFromSprite/SVGFromSprite";
import { Header } from "./HeaderComp.styled";
import { IProps } from "./types";

export default function HeaderComp({ onCloseModal }: IProps) {
  const { isMobile } = useMediaRules();
  return (
    <Header>
      <LogoComp />
      <button type="button" onClick={onCloseModal}>
        <SVGFromSprite name="menu" width="16px" height="16px" color={"#292D32"} />
      </button>
      {!isMobile && <p>Get in touch</p>}
    </Header>
  );
}
