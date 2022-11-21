import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
 }
`;

export const TableInfo = styled.table`
  font-size: 0.8rem;
  width: 100%;
  height: max-content;
  border-collapse: collapse;

  .value-sub-total::before,
  .value-total::before,
  .value-shipping::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 40%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  .value-sub-total {
    position: relative;
    min-height: 1rem;
    min-width: 6rem;
    max-width: 8rem;
    border-radius: 0.2rem;
    overflow: hidden;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 0.9rem;
    }
  }
  .value-shipping {
    position: relative;
    min-height: 1rem;
    min-width: 4rem;
    max-width: 5rem;
    overflow: hidden;
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 0.9rem;
    }
    transition: 0.4s background ease;
  }
  .value-total {
    position: relative;
    overflow: hidden;
    min-height: 1.2rem;
    min-width: 3rem;
    max-width: 6rem;
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.loading[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      min-height: 1.1rem;
    }
    transition: 0.4s background ease;
  }
  .total-name {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
    transition: 0.4s background ease;
  }
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

const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 0.5rem;

  .load::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading.background2} 20%,
      ${({ theme }) => theme.loading[1]} 40%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }
`;

const DetailPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div.group {
    display: flex;
    justify-content: space-between;
    > div {
      height: 1.1rem;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        height: 1rem;
      }
    }
  }
  > div.group > div.key1 {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 4rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.key2 {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 5rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.value1 {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.value2 {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    width: 5rem;
    position: relative;
    overflow: hidden;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  text-align: start;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.3rem;
  > div:nth-child(1) {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    height: 1.4rem;
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
  > div:nth-child(2) {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    height: 1.4rem;
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
`;

const Loading = () => {
  return (
    <TableInfo>
      <tbody>
        <tr>
          <td className="name">Subtotal</td>
          <td>
            <div className="value-sub-total" />
          </td>
        </tr>
        <tr>
          <td className="name">Biaya Kirim</td>
          <td>
            <div className="value-shipping" />
          </td>
        </tr>
        <tr>
          <td>
            <div className="total-name">Total</div>
          </td>
          <td>
            <div className="value-total" />
          </td>
        </tr>
      </tbody>
    </TableInfo>
  );
};

export default Loading;
