import * as S from "./styled";

export const Button = (props) => {
  const { children, variant, ...rest } = props;

  return (
    <S.BaseButton variant={variant} {...rest}>
      {children}
    </S.BaseButton>
  );
};
