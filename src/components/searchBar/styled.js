import styled from "styled-components";

export const SearchBar = styled.form`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background-color: var(--bg100);
  border-radius: var(--radius15);
  padding: 0.8rem;
  padding-left: 1.6rem;
`;

export const InputSearch = styled.input`
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--white200);
  padding-left: 0.8rem;

  font-size: var(--fs14);
  font-weight: var(--fw-regular);
`;
