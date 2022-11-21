import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  min-width: 50%;
  width: 50%;
  margin-top: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 100%;
  }
  transition: 0.4s all ease;
`;

type TForm = {
  isOpen: boolean;
};

export const FormWrapper = styled.div<TForm>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 0;
  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 10rem;
      padding: 3px;
      padding-top: 1rem;
    `}
  transition: 0.4s all ease;
  transition-property: max-height, padding-top, padding;
`;
export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.input.dropdown.icon};
  width: 100%;
  padding: 0.5rem;
`;
export const SocialMediaInfo = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  > svg {
    height: 2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 1.7rem;
    }
  }
`;
type TDropdownIcon = {
  isOpen: boolean;
};

export const DropdownIcon = styled.div<TDropdownIcon>`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  right: 0;
  > svg {
    display: flex;
    height: 1.2rem;
    stroke-width: 56;
    color: ${({ theme }) => theme.input.dropdown.icon};
    transition: 0.4s all ease;
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      > svg {
        transform: rotate(180deg);
      }
    `}
`;

export const ItemName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;
