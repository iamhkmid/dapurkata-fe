import styled, { css } from "styled-components";
import Link from "next/link";

const NLink = styled(Link)``;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 400;
  padding: 0 0.2rem;
  font-size: 0.9rem;
  height: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.link.color};
  border: none;
  outline: none;
  border-radius: 5px;

  :hover {
    color: ${({ theme }) => theme.link.hover.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

type TButton = {
  name: string;
  link: string;
};

const ButtonLink = ({ name, link }: TButton) => {
  return (
    <Container>
      <NLink href={link}>
        <a>{name}</a>
      </NLink>
    </Container>
  );
};

export default ButtonLink;
