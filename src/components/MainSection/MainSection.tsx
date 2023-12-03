import SVGFromSprite from "../SVGFromSprite/SVGFromSprite";
import { LinkToLearnMore, MainText, MainTitle } from "./MainSection.styled";

export default function MainSection() {
  return (
    <section>
      MainSection
      <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
      <MainText>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </MainText>
      <LinkToLearnMore to={'#contactUs'}>
        Learn more
        <SVGFromSprite
          name="arrow-right"
          width="32px"
          height="32px"
        />
      </LinkToLearnMore>
    </section>
  );
}
