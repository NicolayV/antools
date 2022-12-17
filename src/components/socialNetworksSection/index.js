import * as S from "./styled";
import { ReactComponent as FbIcon } from "../../assets/svg/facebook.svg";
import { ReactComponent as InstIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as TwitIcon } from "../../assets/svg/twitter.svg";

export const SocialNetworksSection = () => {
  return (
    <S.Group>
      <FbIcon />
      <InstIcon />
      <TwitIcon />
    </S.Group>
  );
};
