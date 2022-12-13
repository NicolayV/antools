import * as S from "./styled";
import { ToolCard } from "../toolCard";
import ronaldIcon from "../../assets/img/ronald-icon.png";
import { SearchBar } from "../searchBar/";

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
          <S.NewcomerButton>Explore more</S.NewcomerButton>
        </S.NewcomerBoard>

        <S.CardBoard>
          {list.map(({ id, ...rest }) => (
            <ToolCard isMini={true} key={id} {...rest} />
          ))}
        </S.CardBoard>
      </S.Container>

      <S.CarouselBoard>
        <S.Content>
          <S.ButtonContainer>
            <S.ChevronLeft />
            <S.LiftButton />
          </S.ButtonContainer>
          <S.Logo src={ronaldIcon} />
          <S.ButtonContainer>
            <S.ChevronRight />
            <S.LiftButton />
          </S.ButtonContainer>
        </S.Content>
        <S.Carousel>
          <S.CarouselItem />
          <S.CarouselItem active={true} />
          <S.CarouselItem />
        </S.Carousel>
      </S.CarouselBoard>

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
