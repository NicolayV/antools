import * as S from "./styled";
import { ReactComponent as FolderIcon } from "../../assets/svg/icon-folder.svg";
import { ReactComponent as LikeIcon } from "../../assets/svg/icon-like.svg";

const Card = ({ logo, title, subTitle, content, isLiked }) => (
  <>
    <S.Header>
      <S.Logo src={logo} />
      <S.TextGroup>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.TextGroup>
    </S.Header>
    <S.Content>{content}</S.Content>

    <S.LinkGroupe>
      <S.IconGroupe>
        <LikeIcon
          fill={isLiked ? "red" : "rgba(255, 255, 255, 0.78)"}
          fill-opacity={isLiked ? "0.78" : "0.38"}
        />
        <FolderIcon fill-opacity="0.38" />
      </S.IconGroupe>

      <S.CardButton>Visit</S.CardButton>
    </S.LinkGroupe>
  </>
);

export const ToolCard = ({ isMini = false, ...rest }) => {
  if (isMini) {
    return (
      <S.ToolCardMini>
        <Card {...rest} />
      </S.ToolCardMini>
    );
  }
  return (
    <S.ToolCard>
      <Card {...rest} />
    </S.ToolCard>
  );
};
