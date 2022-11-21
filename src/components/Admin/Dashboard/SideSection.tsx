import { useQuery } from "@apollo/client";
import moment from "moment";
import "moment/locale/id";
import { FC, useContext, useEffect } from "react";
import NumberFormat from "react-number-format";
import styled, { keyframes } from "styled-components";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import { ONLINE_USERS } from "../../../graphql/dashboard/queries";
import { ONLINE_USERS_SUBS } from "../../../graphql/dashboard/subscriptions";
import { getTransactionStatus } from "../../../services/getStatus";
import {
  TDashboardLastOrders,
  TDashboardOnlineUsers,
  TGQLOnlineUsersQuery,
  TGQLOnlineUserSubs,
} from "../../../types/dashboard";

type TProps = {
  isLoading: boolean;
  lastOrders: TDashboardLastOrders[];
};

const SideSection: FC<TProps> = (props) => {
  const { lastOrders, isLoading } = props;
  const { dispatch } = useContext(AdminNavCtx);

  const {
    data: dataOU,
    error: errorOU,
    loading: loadingOU,
    subscribeToMore,
  } = useQuery<TGQLOnlineUsersQuery>(ONLINE_USERS, {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  const subscribeDashboard = () => {
    subscribeToMore<TGQLOnlineUserSubs>({
      document: ONLINE_USERS_SUBS,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data?.onlineUsers) return prev;
        const newOnlineUsers = subscriptionData.data.onlineUsers;
        return {
          onlineUsers: newOnlineUsers,
        } as TGQLOnlineUsersQuery;
      },
    });
  };

  useEffect(() => {
    if (dataOU) {
      subscribeDashboard();
    }
  }, [dataOU]);

  return (
    <Main>
      <Section>
        <h1 className="title">Pesanan Terakhir</h1>
        <ItemWrapperLastOrder>
          {isLoading && <LoadingLastOrder />}
          {!isLoading &&
            lastOrders.map((val) => (
              <ItemLastOrder
                key={val.id}
                status={val.transactionStatus}
                onClick={() =>
                  dispatch({
                    type: "SHOW_POPUP",
                    value: { name: "ORDER_DETAIL", orderId: val.id },
                  })
                }
              >
                <div className="info-wrapper">
                  <h1 className="name">{`${val.CustomerDetail.firstName} ${
                    val.CustomerDetail.lastName || ""
                  }`}</h1>
                  <h1 className="price">
                    <NumberFormat
                      prefix="Rp"
                      value={val.grossAmount}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </h1>
                  <h1 className="transaction-status">
                    {getTransactionStatus(val.transactionStatus)}
                  </h1>
                  <h1 className="transaction-time">
                    {moment(val.transactionTime)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY | HH:mm")}
                  </h1>
                </div>
              </ItemLastOrder>
            ))}
        </ItemWrapperLastOrder>
      </Section>
      <Section>
        <h1 className="title">Online</h1>
        <ItemWrapperOnlineUser>
          {loadingOU && !dataOU?.onlineUsers && <LoadingOnlineUser />}
          {dataOU?.onlineUsers?.map((val) => (
            <ItemOnlineUser
              key={val.id}
              onClick={() =>
                dispatch({
                  type: "SHOW_POPUP",
                  value: { name: "USER_DETAIL", userId: val.id },
                })
              }
            >
              <h1 className="name">{`${val.firstName} ${
                val.lastName || ""
              }`}</h1>
              <h1 className="role">{`> ${val.role}`}</h1>
            </ItemOnlineUser>
          ))}
        </ItemWrapperOnlineUser>
      </Section>
    </Main>
  );
};

export default SideSection;

const LoadingLastOrder = () => {
  return (
    <>
      {[1, 2].map((val) => (
        <LoadingLastOrderEl key={val}>
          <div className="name" />
          <div className="price" />
          <div className="transaction-status" />
          <div className="transaction-time" />
        </LoadingLastOrderEl>
      ))}
    </>
  );
};
const LoadingOnlineUser = () => {
  return (
    <>
      {[1, 2].map((val) => (
        <LoadingOnlineUserEl key={val}>
          <div className="dot" />
          <div className="name" />
        </LoadingOnlineUserEl>
      ))}
    </>
  );
};

const shimmer = keyframes`0%{
  background-position: -450px 0;
}
100%{
  background-position: 450px 0;
}

`;
const LoadingLastOrderEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  max-height: 12rem;
  .name::before,
  .price::before,
  .transaction-status::before,
  .transaction-time::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 60%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  .name {
    position: relative;
    overflow: hidden;
    min-height: 12px;
    min-width: 100px;
    max-width: 100px;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: 3px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 10px;
    }
  }
  .price {
    position: relative;
    overflow: hidden;
    min-height: 16px;
    border-radius: 3px;
    min-width: 90px;
    max-width: 90px;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 14px;
    }
  }
  .transaction-status {
    position: relative;
    overflow: hidden;
    min-height: 11px;
    border-radius: 3px;
    min-width: 140px;
    max-width: 140px;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 9px;
    }
  }
  .transaction-time {
    position: relative;
    overflow: hidden;
    min-height: 12px;
    border-radius: 3px;
    min-width: 210px;
    max-width: 210px;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 10px;
    }
  }
`;

const LoadingOnlineUserEl = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  max-height: 12rem;
  .dot::before,
  .name::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 60%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  .dot {
    position: relative;
    overflow: hidden;
    min-height: 8px;
    max-height: 8px;
    min-width: 8px;
    max-width: 8px;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: 100%;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 7px;
      max-height: 8px;
      min-width: 7px;
      max-width: 7px;
    }
  }
  .name {
    position: relative;
    overflow: hidden;
    min-height: 12px;
    border-radius: 3px;
    min-width: 200px;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 10px;
    }
  }
`;

const Main = styled.div`
  display: flex;
  padding: 0.5rem;
  min-width: 320px;
  height: fit-content;
  gap: 1rem;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: auto;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  color: ${({ theme }) => theme.color[2]};
  .title {
    margin: 0 0.5rem;
    margin-bottom: 0.2rem;
    color: ${({ theme }) => theme.color[8]};
    border-bottom: 2px solid ${({ theme }) => theme.button.list.background};
    font-size: 0.9rem;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 0.8rem;
    }
  }
`;

const ItemWrapperLastOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  gap: 0.5rem;
  max-height: 12rem;
  overflow: auto;
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

type TItem = {
  status: string;
};
const ItemLastOrder = styled.div<TItem>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  position: relative;
  .info-wrapper {
    display: flex;
    position: relative;
    z-index: 2;
    gap: 2px;
    flex-direction: column;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    z-index: 1;
    transition: 0.4s all ease;
  }
  :hover {
    ::before {
      background: ${({ theme }) => theme.button.hover.list.background};
    }
  }
  gap: 0.2rem;
  .name {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  .price {
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 14px;
    }
  }
  .transaction-status {
    font-size: 11px;
    line-height: 1;
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    width: fit-content;
    font-weight: 500;
    background: ${({ theme, status }) =>
      theme.transactionStatus[status].background};
    color: ${({ theme, status }) => theme.transactionStatus[status].color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 9px;
    }
  }
  .transaction-time {
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  transition: 0.4s all ease;
`;

const ItemWrapperOnlineUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  max-height: 12rem;
  overflow: auto;
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
const ItemOnlineUser = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 3px;
  :hover {
    background: ${({ theme }) => theme.button.hover.list.background};
    .name,
    .role {
      color: ${({ theme }) => theme.button.hover.list.color};
    }
  }
  ::before {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 50%;
    min-height: 8px;
    min-width: 8px;
    border-radius: 100%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color[8]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      min-height: 7px;
      min-width: 7px;
    }
  }
  .name {
    padding-left: 1rem;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  .role {
    padding-left: 0.5rem;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  transition: 0.4s all ease;
`;
