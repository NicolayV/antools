import * as S from "./styled";
import { ToolCard } from "../toolCard";
import { SearchBar } from "../searchBar/";
import { ImageSlider } from "../imageSlider";
import { slides } from "../../data";
import { Button } from "../button";

export const NewcomerTools = ({ list }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.NewcomerBoard>
          <S.Title>Newcomer Tools</S.Title>
          <S.SubTitle>
            Wow! see the latest update of the most <br />
            recommended tools from reliable designers <br />
            and developers
          </S.SubTitle>
          <Button variant="mediumButton">Explore more</Button>
        </S.NewcomerBoard>

        <S.CardBoard>
          {list.map(({ id, ...rest }) => (
            <ToolCard isMini={true} key={id} {...rest} />
          ))}
        </S.CardBoard>
      </S.Container>

      <ImageSlider slides={slides} />

      <S.InfoBoard>
        <S.Header>
          <S.InfoTitle>Become a contributor?</S.InfoTitle>
          <S.InfoSubTitle>
            Join us and get tips & tricks to become a great <br />
            Designer and Developer
          </S.InfoSubTitle>
        </S.Header>
        <SearchBar placeholder="Enter your email..." buttonText="Join Us" />
      </S.InfoBoard>
    </S.Wrapper>
  );
};
