import styled from "styled-components";
import PopUpHeaderUser from "../../../otherComps/PopUpHeader/PopUpHeaderUser";
import Wishlist from "../../Account/ContentState/Wishlist";

const WishlistPopup = () => {
  return (
    <Main>
      <PopUpHeaderUser title="Daftar Wishlist" />
      <Section>
        <Wishlist />
      </Section>
    </Main>
  );
};

export default WishlistPopup;

const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;
  max-width: 600px;
  min-width: 600px;
  max-height: 100%;
  padding-bottom: 16px;
  font-size: 1rem;
  margin: 0.2rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: 500px;
    max-width: 100%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 16px;
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 16px;
  }
`;
