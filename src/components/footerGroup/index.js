import * as S from "./styled";

export const Footer = () => {
  return (
    <S.Container>
      <S.Sections>
        <S.Header>
          <S.Logo />
          <S.Title>antools.</S.Title>
        </S.Header>

        <S.SubTitle>Copyright 2021. Antools</S.SubTitle>
        <S.SubTitle>
          Antool is a web collection of information on paid or free Design and
          Development tools
        </S.SubTitle>
      </S.Sections>

      <S.Sections>
        <S.Title>Contact Us</S.Title>
        <S.SubTitle>+621987463</S.SubTitle>
        <S.SubTitle>M Building, No.10 A</S.SubTitle>
        <S.SubTitle>antools@awesome.com</S.SubTitle>
      </S.Sections>
      <S.Sections>
        <S.Title>Categories</S.Title>
        <S.SubTitle>Design</S.SubTitle>
        <S.SubTitle>Development</S.SubTitle>
      </S.Sections>
      <S.Sections>
        <S.Title>Company info</S.Title>
        <S.SubTitle>About Us</S.SubTitle>
        <S.SubTitle>Our Partners</S.SubTitle>
        <S.SubTitle>Blog</S.SubTitle>
      </S.Sections>
    </S.Container>
  );
};
