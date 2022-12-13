import styled from "styled-components";
import searchIcon from "../../assets/img/search-icon.png";

export const SearchBar = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background-color: rgba(40, 48, 54, 1);
  border-radius: 15px;
  padding: 8px;
  padding-left: 50px;
  position: relative;
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: "FbIcon",
})`
  position: absolute;
  left: 18px;
`;

export const InputSearch = styled.input`
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const Button = styled.button`
  border-radius: 8px;
  border-width: 0;
  background-color: #ff6e30;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 28px;
  color: rgba(253, 245, 255, 1);
  outline: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
