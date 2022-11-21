import styled, { css, keyframes } from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const shimmer = keyframes`0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
 }

`;
const InputRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.input.border};
  .icon-radio::before,
  .image::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading.background1} 0%,
      ${({ theme }) => theme.loading.background2} 20%,
      ${({ theme }) => theme.loading.background1} 40%,
      ${({ theme }) => theme.loading.background1} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  transition: 0.4s border ease;
`;

const IconRadio = styled.div`
  height: 1rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: ${({ theme }) => theme.input.background};
  position: relative;
  overflow: hidden;
  transition: 0.4s all ease;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .image {
    background: ${({ theme }) => theme.loading.background1};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 40px;
    width: 30%;
    position: relative;
    overflow: hidden;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    .image {
      height: 30px;
      width: 30%;
    }
  }
  -moz-transition: none;
  -webkit-transition: none;
  -o-transition: all 0 ease-in;
  transition: none;
`;

const Loading = () => {
  return (
    <Main>
      {[1, 2].map((val) => (
        <InputRadio key={val}>
          <IconRadio className="icon-radio" />
          <Detail>
            <div className="image" />
          </Detail>
        </InputRadio>
      ))}
    </Main>
  );
};

export default Loading;
