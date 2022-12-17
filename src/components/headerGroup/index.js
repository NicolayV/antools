import { Button } from "../button";
import { SearchBar } from "../searchBar";
import { SocialNetworksSection } from "../socialNetworksSection";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoGroup>
          <S.Logo />
          <p>antools.</p>
        </S.LogoGroup>
        <S.NavGroup>
          <Button variant="menuButton">Home</Button>
          <div>
            <Button variant="menuButton">Categories</Button>
            <S.Chevron />
          </div>
          <Button variant="menuButton">My Collections</Button>
          <Button variant="menuButton">Blog</Button>
        </S.NavGroup>
        <S.LoginGroup>
          <Button variant="secondaryButton">Login</Button>
          <Button variant="primaryButton">Sign Up</Button>
        </S.LoginGroup>
      </S.Container>

      <S.Content>
        <S.Wrap>
          <h2>
            Awesome tools for <br /> Designer & Developer<span>.</span>
          </h2>
          <p>
            Antool is a web collection of information on paid or <br /> free
            Design and Development tools
          </p>

          <SearchBar
            placeholder="find more than 430+ tools..."
            buttonText="Search"
            hasLogo={true}
          />

          <SocialNetworksSection />
        </S.Wrap>
        <S.Illustration />
      </S.Content>
    </S.Wrapper>
  );
};
