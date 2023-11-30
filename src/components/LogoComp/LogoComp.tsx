import SVGFromSprite from '../SVGFromSprite/SVGFromSprite';
import { LogoLink } from './LogoComp.styled';

export default function LogoComp() {
  return (
    <LogoLink to={'/'}>
      <SVGFromSprite name={'logo-L'} width={'31px'} height={'18px'} />
      ecosolution
      <SVGFromSprite name={'logo-R'} width={'60px'} height={'18px'} />
    </LogoLink>
  );
}
