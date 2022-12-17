import styled from "styled-components";
import logoIcon from "../../assets/img/logo.png";

export const Container = styled.div`
  width: 100%;
  padding: 7rem;

  display: flex;

  align-items: flex-start;
  gap: 70px;

  border-top: 0.5px solid var(--grey600);
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Logo = styled.img.attrs({
  src: logoIcon,
  alt: "logo",
})`
  padding-bottom: 2rem;
`;
export const Sections = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.span`
  color: var(--white200);
  font-weight: var(--fw-medium);
  font-size: var(--fs20);
  padding-bottom: 2rem;
`;
export const SubTitle = styled(Title)`
  color: var(--grey300);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  padding-bottom: 1rem;
  text-align: left;

  &:hover {
    color: var(--white200);
  }
`;
