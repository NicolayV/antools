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
  font-size: var(--fs48);
  font-weight: var(--fw-medium);
`;

export const SubTitle = styled(Title)`
  color: var(--grey300);
  font-size: var(--fs18);
  text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const BrandBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;

  border-radius: var(--radius50);
  border-width: 0;
  padding: 5.5rem 8.2rem;
  background: linear-gradient(var(--grey900), var(--black));
`;

export const BrandTitle = styled(Title)`
  color: var(--grey100);
  font-size: var(--fs24);
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
