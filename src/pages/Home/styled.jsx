import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  height: calc(100% - 1.5rem);
  padding: 0.75rem;
`;

export const LeftCol = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RightCol = styled.div`
  display: flex;
  justify-content: flex-end;
`;
