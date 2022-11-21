import { FC, useContext } from "react";
import styled from "styled-components";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import ImageFixed from "../../../../../../otherComps/ImageFixed";
import LoadingPopup2 from "../../../../../../otherComps/Loading/LoadingPopup2";
import { useGQLShoppingcart } from "../../../useGQLUser";

type TProps = {
  userId: string;
};

const Shoppingcart: FC<TProps> = ({ userId }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { data, error, loading } = useGQLShoppingcart({ userId });
  return (
    <Main>
      {loading && <LoadingPopup2 />}
      {!loading && data?.length === 0 && (
        <div className="empty-list">Keranjang Kosong</div>
      )}
      <Scroll>
        {!loading &&
          data?.map((val) => (
            <ItemWrapper
              key={val.id}
              onClick={() => {
                dispatch({
                  type: "SHOW_POPUP",
                  value: {
                    name: "BOOK_DETAIL",
                    bookId: val.Book.id,
                    nested: true,
                  },
                });
              }}
            >
              <CoverWrapper>
                <div>
                  <ImageFixed
                    src={val.Book.coverURL}
                    alt={val.Book.title}
                    height={75}
                    width={50}
                    quality={75}
                    defaultIcon="dapurkata"
                  />
                </div>
              </CoverWrapper>
              <InfoWrapper>
                <div className="info">
                  <h1 className="title">{val.Book.title}</h1>
                  <h1 className="author">{val.Book.Author.name}</h1>
                </div>
              </InfoWrapper>
              <Amount>{`x ${val.amount}`}</Amount>
            </ItemWrapper>
          ))}
      </Scroll>
    </Main>
  );
};

export default Shoppingcart;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  padding: 10px;
  .empty-list {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-x: auto;
  gap: 5px;
  width: 100%;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  cursor: pointer;
  background: ${({ theme }) =>
    theme.name === "light" ? "#ecf0f5b0" : "#1a2330"};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 5px;
  gap: 16px;
  :hover {
    background: ${({ theme }) => theme.button.section.background};
  }
  transition: 0.4s all ease;
`;

const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 100%;
  min-height: 3rem;
  min-width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  overflow: hidden;

  > div {
    display: flex;
    height: 5rem;
    width: 3rem;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
    transition: 0.4s all ease;
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
    transition: 0.4s all ease;
  }
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
  }
`;
