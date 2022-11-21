import styled from "styled-components";
import data from "../../../data/content";
import IconsControl from "../../IconsControl";

const Section2 = () => {
  return (
    <Main>
      <h1 className="title">Spesifikasi Naskah</h1>
      <Items>
        {data.spesifikasi.map((val) => (
          <Item key={val.name}>
            <IconWrapper>{IconsControl(val.name)}</IconWrapper>
            <h1 className="name">{val.name}</h1>
            {val.values.map((val2) => (
              <div key={val2.name} className="value-wrapper">
                <div className="info-wrapper">
                  <h1 className="val-name">{val2.name}</h1>
                  <h1 className="val-val">{val2.value}</h1>
                  {val2.info && <h1 className="val-info">{`*${val2.info}`}</h1>}
                </div>
              </div>
            ))}
          </Item>
        ))}
      </Items>
    </Main>
  );
};

export default Section2;

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
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.5rem;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    border: 2px solid ${({ theme }) => theme.button.primary.background};
  }
  .name {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.2rem;
    }
  }
  .value-wrapper {
    display: flex;
  }
  .info-wrapper {
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
    .val-name {
      font-weight: 600;
    }
    .val-val {
    }
    .val-info {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.color[2]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
      }
    }
  }
  transition: 0.4s all ease;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color[8]};
  height: 5rem;
  width: 5rem;
  margin: 1rem 0;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    transform: rotate(15deg);
    background: ${({ theme }) => theme.button.section.background};
  }
  > svg {
    position: relative;
    height: 3rem;
    stroke-width: 35;
    z-index: 1;
  }
`;
