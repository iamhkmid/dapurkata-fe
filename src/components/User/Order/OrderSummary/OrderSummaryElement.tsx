import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
export const EmptyCart = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  width: 100%;
`;
export const ItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  min-height: 70px;
  min-width: 46px;
  height: 70px;
  width: 46px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
`;

export const Info = styled.div`
  text-align: start;
  > h1:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
    transition: 0.4s all ease;
  }
  > h1:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.6rem;
    }
    transition: 0.4s all ease;
  }
`;
export const Info2 = styled.div`
  display: flex;
  justify-content: space-between;
  > h1:nth-child(1) {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
    transition: 0.4s all ease;
  }
  > h1:nth-child(2) {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
    transition: 0.4s all ease;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > button {
    font-size: 0.9rem;
    height: 2.5rem;
  }

  transition: 0.4s all ease;
  transition-property: height, width, padding;
`;

export const DetailPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 500;
  gap: 0.2rem;
  > div.group {
    display: flex;
    justify-content: space-between;
  }
  > div.group > h1.key {
    color: ${({ theme }) => theme.color[1]};
  }
  > div.group > h1.value {
    color: ${({ theme }) => theme.content.cart.color.total};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;

export const TotalName = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;
export const TotalValue = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.content.cart.color.total};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TableName = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  color: ${({ theme }) => theme.button.primary.background};
`;

export const TableWrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.border[2]};
  flex-direction: column;
  gap: 0 rem;
`;
export const TableInfo = styled.table`
  font-size: 0.8rem;
  width: 100%;
  height: max-content;
  border-collapse: collapse;
  > tbody {
    tr {
      .title {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.button.primary.background};
      }
    }
    td {
      padding: 0.2rem 0.5rem;
      border: 1px solid ${({ theme }) => theme.border[2]};
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 12rem;
  overflow-x: auto;
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

export const ButtonWrapper = styled.div`
  display: flex;
  width: max-content;
`;
