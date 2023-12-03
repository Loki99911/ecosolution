import { useMediaRules } from '../../hooks/MediaRules';
import Container from '../Container/Container';
import LogoComp from '../LogoComp/LogoComp';
import SVGFromSprite from '../SVGFromSprite/SVGFromSprite';
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderButtonWrapper,
  LinkToContactUs,
  MenuButton,
} from './Header.styled';
import { IProps } from './types';

export default function Header({ onCloseModal }: IProps) {
  const { isMobile } = useMediaRules();
  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <LogoComp />
          <HeaderButtonWrapper>
            <MenuButton type="button" onClick={onCloseModal}>
              <SVGFromSprite
                name="menu"
                width="16px"
                height="16px"
                color={'#292D32'}
              />
            </MenuButton>
            {!isMobile && (
              <LinkToContactUs to={'#contactUs'}>
                Get in touch
                <SVGFromSprite
                  name="dot"
                  width="14px"
                  height="14px"
                  color={'#173D33'}
                />
                <SVGFromSprite name="arrow-down" width="14px" height="14px" />
              </LinkToContactUs>
            )}
          </HeaderButtonWrapper>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}
