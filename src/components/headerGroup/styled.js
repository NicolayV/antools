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

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & p {
    color: var(--white200);
    font-size: var(--fs22);
    font-weight: var(--fw-semiBold);
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

export const Content = styled.div`
  display: flex;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > h2 {
    color: var(--white200);
    font-family: var(--family-work);
    font-size: var(--fs34);
    font-weight: var(--fw-bold);
    padding: 2.4rem 0;
    & span {
      color: var(--orange);
    }
  }

  & > p {
    color: var(--grey300);
    font-size: var(--fs18);
    font-weight: var(--fw-regular);
    padding-bottom: 1.5rem;
  }
`;

export const Illustration = styled.img.attrs({
  src: illustration,
  alt: "illustration",
})`
  position: relative;
  left: 65px;
`;
