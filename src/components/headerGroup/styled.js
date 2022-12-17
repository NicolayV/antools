import styled from "styled-components";
import logoIcon from "../../assets/img/logo.png";
import chevronIcon from "../../assets/img/chevron-down.png";

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
  background-color: var(--orange);

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 28px;
  color: var(--white100);
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
  color: var(--grey300);
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
    color: var(--white200);
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
    color: var(--white200);
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 34px;
    padding: 24px 0;
    & span {
      color: var(--orange);
    }
  }

  & > p {
    color: var(--grey300);
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 15px;
  }
`;

export const Illustration = styled.img.attrs({
  src: illustration,
  alt: "illustration",
})`
  position: relative;
  left: 65px;
`;
