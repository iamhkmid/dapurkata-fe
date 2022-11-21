import styled from "styled-components";

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.input.label};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.3s all ease;
`;
export const BorderBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: ${({ theme }) => theme.input.focus.borderFocus};
  transition: 0.3s all ease;
`;
export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.input.border};
  margin: 0.3rem 0;
  &.error {
    border: 1px solid ${({ theme }) => theme.input.error.border};
    ${BorderBottom} {
      background: ${({ theme }) => theme.input.error.background};
    }
  }

  :hover {
    ${BorderBottom} {
      width: 100%;
    }
    box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
    background: ${({ theme }) => theme.input.focus.background};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
    &.error {
      border: 1px solid ${({ theme }) => theme.input.error.border};
      box-shadow: ${({ theme }) => theme.input.error.boxShadow};
    }
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.3s all ease;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  margin: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 1.5rem;
  width: 6rem;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.button.hover.primary.background};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const HiddenInput = styled.input`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: red;
  display: none;
`;
export const ImagePreview = styled.img`
  height: 5.6rem;
  margin: 0 0 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
`;
export const FileName = styled.h1`
  color: ${({ theme }) => theme.color[1]};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.8rem;
  margin: 0 1rem 1rem 1rem;
`;
export const NoImage = styled.div`
  border-radius: ${({ theme }) => theme.input.borderRadius};
  min-height: 5.6rem;
  max-height: 5.6rem;
  min-width: 10rem;
  max-width: 10rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.input.border};
  color: ${({ theme }) => theme.color[1]};
  background: ${({ theme }) => theme.background[2]};
  transition: 0.4s all ease;
`;
