import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  margin-bottom: 100px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;
export const NewcomerBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const Title = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 48px;
  text-align: left;
  margin-bottom: 34px;
`;

export const SubTitle = styled(Title)`
  color: rgba(255, 255, 255, 0.55);
  font-size: 18px;
  margin-bottom: 56px;
`;
export const NewcomerButton = styled.button`
  padding: 15px 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 110, 48, 1);
  border-radius: 8px;
  border-width: 0;
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;
export const CardBoard = styled.div`
  width: 625px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;

export const InfoBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 48px;
  padding-bottom: 20px;
`;

export const InfoSubTitle = styled(InfoTitle)`
  color: rgba(255, 255, 255, 0.55);
  font-size: 18px;
  text-align: center;
  padding-bottom: 10px;
`;
