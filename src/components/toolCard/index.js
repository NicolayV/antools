import * as S from "./styled";
import { ReactComponent as FolderIcon } from "../../assets/svg/icon-folder.svg";
import { ReactComponent as LikeIcon } from "../../assets/svg/icon-like.svg";
import { Button } from "../button";

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
          fill={isLiked ? "red" : "var(--grey200)"}
          fillOpacity={isLiked ? "0.78" : "0.38"}
        />
        <FolderIcon fillOpacity="0.38" />
      </S.IconGroupe>

      <Button variant="cardButton">Visit</Button>
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
