import { useState } from "react";
import * as S from "./styled";

import { ReactComponent as ChevronRightLogo } from "../../assets/svg/chevron-right.svg";
import { ReactComponent as ChevronLeftLogo } from "../../assets/svg/chevron-left.svg";

export const ImageSlider = (props) => {
  const { slides } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Button onClick={goToPrevious}>
          <ChevronLeftLogo />
        </S.Button>

        <S.ImgBoard currentImg={slides[currentIndex]}></S.ImgBoard>

        <S.Button onClick={goToNext}>
          <ChevronRightLogo />
        </S.Button>
      </S.Container>

      <S.Carousel>
        {slides.map((_, index) => (
          <S.CarouselItem
            isActive={currentIndex === index ? true : false}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.Carousel>
    </S.Wrapper>
  );
};
