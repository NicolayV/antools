import styled from "styled-components";
import logoIcon from "../../assets/img/logo.png";

export const Container = styled.div`
  width: 100%;
  padding: 70px;

  display: flex;

  align-items: flex-start;
  gap: 70px;

  border-top: 0.5px solid rgba(255, 255, 255, 0.15);
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
  padding-bottom: 20px;
`;
export const Sections = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 20px;
`;
export const SubTitle = styled(Title)`
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  padding-bottom: 10px;
  text-align: left;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;
