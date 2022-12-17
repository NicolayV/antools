import styled, { css } from "styled-components";

export const BaseButton = styled.button`
  padding: ${(props) => props[props.variant].padding};
  font-size: ${(props) => props[props.variant].fontSize};
  font-weight: ${(props) => props[props.variant].fontWeight};

  background-color: ${(props) => props[props.variant].backgroundColor};
  border: ${(props) => props[props.variant].border};
  border-radius: ${(props) => props[props.variant].borderRadius};
  border-width: 0;
  color: ${(props) => props[props.variant].color};
  outline: none;
  cursor: pointer;
  box-shadow: ${(props) => props[props.variant].boxShadow};
  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }

  ${({ variant }) =>
    variant === "sliderButton"
      ? css`
          position: relative;
          &:hover {
            opacity: 1;
            & svg * {
              stroke: var(--orange);
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
        `
      : null};

  ${({ variant }) =>
    variant === "cardButton"
      ? css`
          &:hover {
            opacity: 1;
            background-color: var(--orange);
            color: var(--white100);
          }
        `
      : null};
`;

BaseButton.defaultProps = {
  primaryButton: {
    padding: "1.2rem 2.8rem",
    fontSize: "var(--fs16)",
    fontWeight: "var(--fw-semiBold)",
    backgroundColor: "var(--orange)",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--white100)",
    boxShadow: "unset",
  },
  secondaryButton: {
    padding: "1.2rem 2.8rem",
    fontSize: "var(--fs16)",
    fontWeight: "var(--fw-semiBold)",
    backgroundColor: "transparent",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--grey200)",
    boxShadow: "unset",
  },
  menuButton: {
    padding: "0 2rem",
    fontSize: "var(--fs16)",
    fontWeight: "var(--fw-medium)",
    backgroundColor: "transparent",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--grey300)",
    boxShadow: "unset",
  },
  searchButton: {
    padding: "1.2rem 3.6rem",
    fontSize: "var(--fs16)",
    fontWeight: "var(--fw-semiBold)",
    backgroundColor: "var(--orange)",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--white100)",
    boxShadow: "unset",
  },
  cardButton: {
    padding: "0.9rem 3.5rem",
    fontSize: "var(--fs16)",
    fontWeight: "var(--fw-semiBold)",

    backgroundColor: "transparent",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--grey300)",
    boxShadow: "unset",
  },
  loadButton: {
    padding: "1.7rem 3.8rem",
    fontSize: "var(--fs20)",
    fontWeight: "var(--fw-medium)",
    backgroundColor: "transparent",
    border: "1px solid var(--grey700)",
    borderRadius: "var(--radius4)",
    color: "var(--orange)",
    boxShadow: "0 0 5px black",
  },
  mediumButton: {
    padding: "1.5rem 4rem",
    fontSize: "var(--fs18)",
    fontWeight: "var(--fw-medium)",
    backgroundColor: "var(--orange)",
    border: "unset",
    borderRadius: "var(--radius8)",
    color: "var(--white100)",
    boxShadow: "unset",
  },
  sliderButton: {
    padding: "5rem 5.5rem",
    fontSize: "unset",
    fontWeight: "unset",
    backgroundColor: "transparent",
    border: "unset",
    borderRadius: "unset",
    color: "unset",
    boxShadow: "unset",
  },
};
