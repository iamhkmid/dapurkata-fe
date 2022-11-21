import styled from "styled-components";

export const NumberColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DefaultColumn = styled.div``;
export const ActionColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Title = styled.div`
  min-width: 15rem;
`;
