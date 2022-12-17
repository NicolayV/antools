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
  color: var(--white200);
  font-size: var(--fs48);
  font-weight: var(--fw-medium);
  text-align: left;
  margin-bottom: 34px;
`;

export const SubTitle = styled(Title)`
  color: var(--grey300);
  font-size: var(--fs18);
  margin-bottom: 56px;
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
  color: var(--white200);
  font-size: var(--fs48);
  font-weight: var(--fw-medium);
  padding-bottom: 2rem;
`;

export const InfoSubTitle = styled(InfoTitle)`
  color: var(--grey300);
  font-size: var(--fs18);
  text-align: center;
  padding-bottom: 1rem;
`;
