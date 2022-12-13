import styled from "styled-components";

import likeIcon from "../../assets/img/like-icon.png";
import likeIconColor from "../../assets/img/like-icon-colored.png";
import folderIcon from "../../assets/img/folder-icon.png";

export const ToolCard = styled.div`
  width: 392px;
  height: 294px;
  border-radius: 50px;
  padding: 33px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    background: linear-gradient(
      rgba(40, 48, 54, 0.6),
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0)
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
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0)
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
  color: rgba(255, 255, 255, 0.78);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
`;

export const SubTitle = styled(Title)`
  color: rgba(255, 165, 55, 0.55);
  font-weight: 400;
  font-size: 18px;
`;

export const Content = styled(SubTitle)`
  color: rgba(255, 255, 255, 0.55);
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
`;
export const LikeIcon = styled.img.attrs({
  src: likeIcon,
  alt: "likeIcon",
})``;

export const LikeIconActive = styled.img.attrs({
  src: likeIconColor,
  alt: "likeIcon",
})``;

export const FolderIcon = styled.img.attrs({
  src: folderIcon,
  alt: "folderIcon",
})``;

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
  color: rgba(255, 255, 255, 0.55);
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 110, 48, 1);
    color: rgba(255, 255, 255, 1);
  }
`;
