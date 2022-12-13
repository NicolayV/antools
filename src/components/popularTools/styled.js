import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 48px;
`;

export const SubTitle = styled(Title)`
  color: rgba(255, 255, 255, 0.55);
  font-size: 18px;
  text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const LoadButton = styled.button`
  padding: 17px 38px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 110, 48, 1);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 5px black;
`;

export const BrandBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;

  border-radius: 50px;
  border-width: 0;
  padding: 55px 82px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0)
  );
`;

export const BrandTitle = styled(Title)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

export const BrandGroupe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

export const Logo = styled.img.attrs({
  alt: "logo",
})``;
