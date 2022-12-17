import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  align-items: flex-end;
  cursor: pointer;

  & svg {
    fill: var(--grey200);
    &:hover {
      fill: var(--orange);
    }
  }
`;
