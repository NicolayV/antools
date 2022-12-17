import * as S from "./styled";

import { ReactComponent as SearchLogo } from "../../assets/svg/search.svg";
import { useState } from "react";
import { Button } from "../button";

export const SearchBar = ({
  buttonText = "Ok",
  placeholder = "",
  hasLogo = false,
  ...rest
}) => {
  const [innerValue, setInnerValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setInnerValue("");
  };

  return (
    <S.SearchBar onSubmit={handleSubmit}>
      {hasLogo ? <SearchLogo /> : null}
      <S.InputSearch
        placeholder={placeholder}
        type="text"
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        {...rest}
      />
      <Button variant="searchButton" type="submit">
        {buttonText}
      </Button>
    </S.SearchBar>
  );
};
