import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookInfo = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 10px;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.color[2]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 22px;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .label {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 10px;
    }
  }
  .value {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[1]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .price {
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .description {
    max-height: 120px;
    overflow-y: auto;
    color: ${({ theme }) => theme.color[1]};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;

    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) => theme.scrollbar.v1.thumb};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
    }
  }
  transition: 0.4s all ease;
`;
export const DetailWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  .detail-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .item-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const Category = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  display: flex;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 10rem;
  max-width: fit-content;
  padding: 0.5rem 0;
  gap: 0.3rem;
  flex-wrap: wrap;
`;

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 160px;
  aspect-ratio: 7.6/11;
`;
