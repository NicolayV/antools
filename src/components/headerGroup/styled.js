import styled from "styled-components";
import logoIcon from "../../assets/img/logo.png";
import chevronIcon from "../../assets/img/chevron-down.png";
import searchIcon from "../../assets/img/search-icon.png";
import fbIcon from "../../assets/img/fb-icon.png";
import instIcon from "../../assets/img/inst-icon.png";
import twitIcon from "../../assets/img/twit-icon.png";
import illustration from "../../assets/img/illustration.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 2.6rem;
`;

export const Button = styled.button`
  border-radius: 8px;
  border-width: 0;
  background-color: #ff6e30;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 28px;
  color: rgba(253, 245, 255, 1);
  outline: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const OutlineButton = styled.button`
  outline: none;
  border-width: 0;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;

  padding: 0 20px;
`;
//
//
//
export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & p {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 22px;
  }
`;

export const Logo = styled.img.attrs({
  src: logoIcon,
  alt: "logo",
})``;

export const LoginGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & div {
    display: flex;
    position: relative;
  }
`;

export const Chevron = styled.img.attrs({
  src: chevronIcon,
  alt: "",
})`
  position: absolute;
  right: 2px;
`;
//
//
//
//
//
export const Content = styled.div`
  display: flex;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > h2 {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 34px;
    padding: 24px 0;
    & span {
      color: rgba(255, 110, 48, 1);
    }
  }

  & > p {
    color: rgba(255, 255, 255, 0.55);
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 15px;
  }
`;

export const SocialNetworksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  align-items: flex-end;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background-color: rgba(40, 48, 54, 1);
  border-radius: 15px;
  padding: 8px;
  padding-left: 50px;
  position: relative;
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: "FbIcon",
})`
  position: absolute;
  left: 18px;
`;

export const InputSearch = styled.input`
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const FbIcon = styled.img.attrs({
  src: fbIcon,
  alt: "FbIcon",
})``;
export const InstIcon = styled.img.attrs({
  src: instIcon,
  alt: "InstIcon",
})``;
export const TwitIcon = styled.img.attrs({
  src: twitIcon,
  alt: "TwitIcon",
})``;
export const Illustration = styled.img.attrs({
  src: illustration,
  alt: "illustration",
})`
  position: relative;
  left: 65px;
`;
