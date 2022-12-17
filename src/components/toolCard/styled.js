import styled from "styled-components";

export const ToolCard = styled.div`
  width: 392px;
  height: 294px;
  border-radius: 50px;
  padding: 33px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    background-image: linear-gradient(
      45deg,
      rgba(40, 48, 54, 0.6),
      var(--grey800),
      var(--black),
      var(--grey900),
      var(--black)
    );
  }
`;

export const ToolCardMini = styled.div`
  width: 288px;
  height: 284px;
  border-radius: 50px;
  padding: 33px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    background: linear-gradient(
      rgba(40, 48, 54, 0.6),
      var(--grey800),
      var(--black),
      var(--grey900),
      var(--black)
    );
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 34px;
`;
export const Logo = styled.img.attrs({
  alt: "logo",
})`
  width: 64px;
  height: 64px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: var(--grey200);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
`;

export const SubTitle = styled(Title)`
  color: var(--brown100);
  font-weight: 400;
  font-size: 18px;
`;

export const Content = styled(SubTitle)`
  color: var(--grey300);
  font-size: 16px;
  flex-grow: 1;
  margin: 20px 0;
`;

export const LinkGroupe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconGroupe = styled.div`
  display: flex;
  gap: 12px;

  & svg {
    &:hover {
      fill-opacity: 0.78;
    }
  }
`;

export const CardButton = styled.button`
  padding: 9px 35px;
  border-radius: 8px;
  border-width: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  outline: none;
  background-color: transparent;
  color: var(--grey300);
  transition: 0.3s;

  &:hover {
    background-color: var(--orange);
    color: var(--white100);
  }
`;
