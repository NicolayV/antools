import { SearchBar } from "../searchBar";
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
          <S.OutlineButton>Home</S.OutlineButton>
          <div>
            <S.OutlineButton>Categories</S.OutlineButton>
            <S.Chevron />
          </div>
          <S.OutlineButton>My Collections</S.OutlineButton>
          <S.OutlineButton>Blog</S.OutlineButton>
        </S.NavGroup>
        <S.LoginGroup>
          <S.OutlineButton>Login</S.OutlineButton>
          <S.Button>Sign Up</S.Button>
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
            searchLogo={true}
          />

          <S.SocialNetworksGroup>
            <S.FbIcon />
            <S.InstIcon />
            <S.TwitIcon />
          </S.SocialNetworksGroup>
        </S.Wrap>
        <S.Illustration />
      </S.Content>
    </S.Wrapper>
  );
};
