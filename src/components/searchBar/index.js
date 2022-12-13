import * as S from "./styled";

export const SearchBar = ({
  buttonText = "Search",
  placeholder = "find more than 430+ tools...",
  ...props
}) => {
  return (
    <S.SearchBar>
      <S.SearchIcon />
      <S.InputSearch placeholder={placeholder} {...props} />
      <S.Button>{buttonText}</S.Button>
    </S.SearchBar>
  );
};
