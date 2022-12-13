import * as S from "./styled";

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
        {isLiked ? <S.LikeIconActive /> : <S.LikeIcon />}
        <S.FolderIcon />
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
