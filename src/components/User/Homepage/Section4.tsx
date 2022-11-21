import NumberFormat from "react-number-format";
import styled from "styled-components";
import data from "../../../data/content";
import Image from "next/image";
import IconsControl from "../../IconsControl";

const Section4 = () => {
  return (
    <Main>
      <h1 className="title">Layanan</h1>
      <Content>
        <ImageCenter>
          <ImageContainer>
            <Image
              src="/img/banner2.svg"
              alt="image 2"
              layout="responsive"
              objectFit="fill"
              width="300"
              height="250"
            />
          </ImageContainer>
        </ImageCenter>
        <Items>
          {data.contents.map((val) => (
            <Item key={val}>
              <IconWrapper>{IconsControl("checkmark-outline")}</IconWrapper>
              {val}
            </Item>
          ))}
        </Items>
      </Content>
    </Main>
  );
};

export default Section4;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 2rem;
  gap: 2rem;
  > h1 {
    color: ${({ theme }) => theme.color[1]};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 4rem 1rem;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ImageCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ImageContainer = styled.div`
  display: block;
  align-items: center;
  position: relative;
  height: 300px;
  aspect-ratio: 6/5;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 250px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 200px;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 0.2rem;
  height: 1.2rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: ${({ theme }) => theme.color[6]};
  color: ${({ theme }) => theme.color[4]};
  > svg {
    height: 1005;
    stroke-width: 80;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 1.1rem;
  }
`;
