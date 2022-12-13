import { ToolCard } from "../toolCard";
import * as S from "./styled";

import logoMicrosoft from "../../assets/img/logos_microsoft.png";
import logoGoogle from "../../assets/img/logos_google.png";
import logoSlack from "../../assets/img/logos_slack.png";
import logoWorldPress from "../../assets/img/logos_wordpress.png";

export const PopularTools = ({ list }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Most Popular Tools</S.Title>
        <S.SubTitle>
          Tools for the best Designers and Developers
          <br />
          most popularly used in the world
        </S.SubTitle>
      </S.Header>

      <S.Container>
        {list.map(({ id, ...rest }) => (
          <ToolCard key={id} {...rest} />
        ))}
      </S.Container>

      <S.LoadButton>Load More</S.LoadButton>

      <S.BrandBoard>
        <S.BrandTitle>Trusted more than 150+ brand</S.BrandTitle>
        <S.BrandGroupe>
          <S.Logo src={logoMicrosoft} />
          <S.Logo src={logoGoogle} />
          <S.Logo src={logoSlack} />
          <S.Logo src={logoWorldPress} />
        </S.BrandGroupe>
      </S.BrandBoard>
    </S.Wrapper>
  );
};
