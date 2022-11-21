import styled from "styled-components";
import IconsControl from "../../IconsControl";

const Container = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  background: ${({ theme }) => theme.button.danger.background};
  color: ${({ theme }) => theme.button.danger.color};
  min-height: 1.7rem;
  min-width: 1.7rem;
  max-height: 1.7rem;
  max-width: 1.7rem;
  padding: 0.2rem;
  border-radius: 100%;
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }
`;

const DeleteBtn = ({ onClick }) => {
  return (
    <Container>
      <IconWrapper onClick={onClick}>{IconsControl("delete")}</IconWrapper>
    </Container>
  );
};

export default DeleteBtn;
