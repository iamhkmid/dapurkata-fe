import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 100%;
  }
  transition: 0.4s all ease;
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  width: max-content;
  > button {
    width: 100%;
  }
  justify-content: flex-end;
  align-items: center;
`;
