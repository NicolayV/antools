import * as S from "./styled";

import { ReactComponent as SearchLogo } from "../../assets/svg/search.svg";
import { useState } from "react";

export const SearchBar = ({
  buttonText = "Ok",
  placeholder = "",
  searchLogo = false,
  ...rest
}) => {
  const [innerValue, setInnerValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setInnerValue("");
  };

  return (
    <S.SearchBar onSubmit={handleSubmit}>
      {searchLogo ? <SearchLogo /> : null}
      <S.InputSearch
        placeholder={placeholder}
        type="text"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        {...rest}
      />
      <S.Button type="submit">{buttonText}</S.Button>
    </S.SearchBar>
  );
};
