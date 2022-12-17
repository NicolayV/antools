import styled from "styled-components";

export const ToolCard = styled.div`
  width: 392px;
  height: 294px;
  border-radius: var(--radius50);
  padding: 3.3rem;

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
  border-radius: var(--radius50);
  padding: 3.3rem;

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
  font-size: var(--fs24);
  font-weight: var(--fw-medium);
`;

export const SubTitle = styled(Title)`
  color: var(--brown100);
  font-weight: 400;
  font-size: var(--fs18);
`;

export const Content = styled(SubTitle)`
  color: var(--grey300);
  font-size: var(--fs16);
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
