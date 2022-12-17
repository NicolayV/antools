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
  color: var(--white200);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 48px;
`;

export const SubTitle = styled(Title)`
  color: var(--grey300);
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
  color: var(--orange);
  border-radius: 4px;
  border: 1px solid var(--grey700);
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
  background: linear-gradient(var(--grey900), var(--black));
`;

export const BrandTitle = styled(Title)`
  color: var(--grey100);
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
