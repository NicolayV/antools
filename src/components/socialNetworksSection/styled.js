import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  align-items: flex-end;
  cursor: pointer;

  & svg {
    fill: rgba(255, 255, 255, 0.78);
    &:hover {
      fill: rgba(255, 110, 48, 1);
    }
  }
`;
