import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  .empty-list {
    display: flex;
    font-size: 14px;
    color: ${({ theme }) => theme.color[1]};
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const CoverWrapper = styled.div`
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

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    > button {
      padding: 5px 10px;
      min-height: fit-content;
      font-size: 12px;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
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
