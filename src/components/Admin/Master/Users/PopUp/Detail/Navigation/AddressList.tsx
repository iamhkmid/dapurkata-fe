import { FC, useContext } from "react";
import styled from "styled-components";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import LoadingPopup2 from "../../../../../../otherComps/Loading/LoadingPopup2";
import { useGQLRecipients } from "../../../useGQLUser";

type TProps = {
  userId: string;
};

const AddressList: FC<TProps> = ({ userId }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { data, error, loading } = useGQLRecipients({ userId });
  return (
    <Main>
      {loading && <LoadingPopup2 />}
      {!loading && data?.length === 0 && (
        <div className="empty-list">Data Kosong</div>
      )}
      <Scroll>
        {!loading &&
          data?.map((val) => (
            <ItemWrapper
              key={val.id}
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: { name: "ADDRESS_DETAIL", recipientId: val.id },
                })
              }
            >
              <InfoWrapper>
                <div className="info">
                  <h1 className="name">{`${val.firstName} ${
                    val.lastName || ""
                  }`}</h1>
                  <h1 className="address">{val.address}</h1>
                </div>
              </InfoWrapper>
            </ItemWrapper>
          ))}
      </Scroll>
    </Main>
  );
};

export default AddressList;

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

const InfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8px;
  }

  .name {
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
  .address {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
    transition: 0.4s all ease;
  }
`;
