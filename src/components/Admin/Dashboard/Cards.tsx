import { useQuery } from "@apollo/client";
import { FC } from "react";
import NumberFormat from "react-number-format";
import styled, { keyframes } from "styled-components";
import { DASHBOARD } from "../../../graphql/dashboard/queries";
import { TGQLDashboardQuery } from "../../../types/dashboard";
import IconsControl from "../../IconsControl";

type TProps = {
  isLoading: boolean;
  totalOrders: number;
  totalIncome: number;
  totalProducts: number;
  totalUsers: number;
};

const Cards: FC<TProps> = (props) => {
  const { totalIncome, totalOrders, totalProducts, totalUsers, isLoading } =
    props;
  return (
    <Main>
      <Card>
        <IconWrapper>{IconsControl("reader-outline")}</IconWrapper>
        <div className="info">
          <h1 className="name">Total Pesanan</h1>
          {isLoading && <Loading className="total-orders" />}
          {!isLoading && <h1 className="value">{totalOrders}</h1>}
        </div>
      </Card>
      <Card>
        <IconWrapper>{IconsControl("wallet-outline")}</IconWrapper>
        <div className="info">
          <h1 className="name">Total Pendapatan</h1>
          {isLoading && <Loading className="total-income" />}
          {!isLoading && (
            <h1 className="value">
              <NumberFormat
                prefix="Rp"
                value={totalIncome}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
              />
            </h1>
          )}
        </div>
      </Card>
      <Card>
        <IconWrapper>{IconsControl("cube-outline")}</IconWrapper>
        <div className="info">
          <h1 className="name">Total Produk</h1>
          {isLoading && <Loading className="total-products" />}
          {!isLoading && <h1 className="value">{totalProducts}</h1>}
        </div>
      </Card>
      <Card>
        <IconWrapper>{IconsControl("people-outline")}</IconWrapper>
        <div className="info">
          <h1 className="name">Total User</h1>
          {isLoading && <Loading className="total-users" />}
          {!isLoading && <h1 className="value">{totalUsers}</h1>}
        </div>
      </Card>
    </Main>
  );
};

export default Cards;

export const Main = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.3rem;
  ::before {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${({ theme }) => theme.button.list.background};
    border-radius: 5px;
    position: absolute;
  }
  > svg {
    position: relative;
    z-index: 2;
    height: 2rem;
    fill: ${({ theme }) => theme.color[8]};
    color: ${({ theme }) => theme.color[8]};
    stroke-width: 35;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    > svg {
      height: 1rem;
    }
    ::before {
      border-radius: 3px;
    }
  }
`;

const shimmer = keyframes`0%{
  background-position: -450px 0;
}
100%{
  background-position: 450px 0;
}

`;
const Loading = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 17px;
  &.total-orders {
    min-width: 40px;
    max-width: 40px;
  }
  &.total-income {
    min-width: 100px;
    max-width: 100px;
  }
  &.total-users {
    min-width: 35px;
    max-width: 35px;
  }
  &.total-products {
    min-width: 50px;
    max-width: 50px;
  }
  border-radius: 3px;
  background: ${({ theme }) => theme.loading[1]};
  :before {
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
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-height: 15px;
  }
`;

const Card = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[2]};
  gap: 0.5rem;
  border: 1px solid transparent;
  :hover {
    border: 1px solid ${({ theme }) => theme.button.primary.background};
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 0.5rem;
    border-left: 1px solid ${({ theme }) => theme.button.list.background};
  }
  .name {
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .value {
    font-size: 17px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
  transition: 0.4s all ease;
`;
