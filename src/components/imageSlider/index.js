import { useState } from "react";
import * as S from "./styled";

import { ReactComponent as ChevronRightLogo } from "../../assets/svg/chevron-right.svg";
import { ReactComponent as ChevronLeftLogo } from "../../assets/svg/chevron-left.svg";
import { Button } from "../button";

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
        <Button variant="sliderButton" onClick={goToPrevious}>
          <ChevronLeftLogo />
        </Button>

        <S.ImgBoard currentImg={slides[currentIndex]}></S.ImgBoard>

        <Button variant="sliderButton" onClick={goToNext}>
          <ChevronRightLogo />
        </Button>
      </S.Container>

      <S.Carousel>
        {slides.map((_, index) => (
          <S.CarouselItem
            key={index}
            isActive={currentIndex === index ? true : false}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.Carousel>
    </S.Wrapper>
  );
};
