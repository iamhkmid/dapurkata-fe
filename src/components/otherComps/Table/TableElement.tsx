import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TableHeader = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TableElement = styled.table`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-collapse: collapse;
  width: 100%;

  tr {
    .number {
      width: 2%;
      > div > div {
        display: none;
      }
    }
    .actions {
      > div > div {
        display: none;
      }
      width: 2%;
    }
    th {
      font-weight: 500;
      position: relative;
      padding: 0.7rem 0.5rem;
      background: ${({ theme }) => theme.table.th.background};
      border-bottom: 1px solid ${({ theme }) => theme.table.border};
      color: ${({ theme }) => theme.table.th.color};
      transition: 0.4s all ease;
    }
    td {
      background: ${({ theme }) => theme.table.td.background};
      padding: 0.4rem 0.5rem;
      color: ${({ theme }) => theme.table.td.color};
      border-bottom: 1px solid ${({ theme }) => theme.table.border};
      transition: 0.4s all ease;
    }
    :hover {
      td {
        background: ${({ theme }) => theme.table.hover.background};
        border-bottom-color: ${({ theme }) => theme.table.hover.border};
      }
      transition: 0.4s all ease;
    }
    transition: 0.4s all ease;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.background[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  > div {
    display: flex;
    flex-direction: column;
  }
  overflow-y: auto;
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
  transition: 0.4s all ease;
`;

export const TdWrapper = styled.div`
  display: flex;
  min-height: 2rem;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s all ease;
  transition-property: width, weight;
`;
export const ThWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.4s all ease;
  transition-property: width, weight;
`;
type TThIcon = {
  rotare: boolean;
  isShowed: boolean;
};
export const ThIcon = styled.div<TThIcon>`
  color: ${({ theme }) => theme.table.td.color};
  margin-left: 3px;
  display: flex;
  align-items: center;
  > svg {
    height: 15px;
    stroke-width: 52;
  }
  ${({ rotare }) =>
    rotare &&
    css`
      transform: rotate(180deg);
    `};
  ${({ isShowed }) =>
    !isShowed &&
    css`
      color: transparent;
    `}
  transition: 0.4s all ease;
`;

export const EmptyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  padding: 12px;
  color: ${({ theme }) => theme.color[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 13px;
  }
`;
