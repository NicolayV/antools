import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ImgBoard = styled.div`
  background: ${({ currentImg }) => css`url(${currentImg})`};
  background-size: 100%;
  width: 870px;
  height: 500px;
`;
export const Button = styled.button`
  padding: 50px 55px;
  background-color: transparent;
  outline: none;
  border-width: 0;
  cursor: pointer;
  position: relative;

  &:hover {
    & svg * {
      stroke: #ff6e30;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & * {
      stroke: var(--grey500);
    }
  }
`;
export const Carousel = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const CarouselItem = styled.div`
  width: 44px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isActive ? "var(--orange)" : "var(--bg100)"};
  cursor: pointer;
  &:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, var(--grey800) 0px 1px 0px inset;
  }
`;
