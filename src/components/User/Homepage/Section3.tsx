import NumberFormat from "react-number-format";
import styled from "styled-components";
import data from "../../../data/content";

const Section3 = () => {
  return (
    <Main>
      <h1 className="title">Paket Kreator</h1>
      <TabbleWrapper>
        <Table>
          <thead>
            <tr>
              <th rowSpan={2} className="amount-page">
                Banyak Halaman
              </th>
              <th colSpan={6}>JUMLAH & HARGA PER EKSEMPLAR</th>
            </tr>
            <tr>
              {data.paketHarga.eks.map((val) => (
                <th key={val}>{val}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.paketHarga.hal.map((hal) => (
              <tr key={hal}>
                <td className="amount-page">{hal}</td>
                {data.paketHarga.data
                  .filter((val) => val.hal === hal)
                  .map((val) => (
                    <td key={val.harga}>
                      <div>
                        <NumberFormat
                          prefix="Rp "
                          value={val.harga}
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </div>
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TabbleWrapper>
    </Main>
  );
};

export default Section3;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 2rem;
  gap: 2rem;
  > h1 {
    color: ${({ theme }) => theme.color[1]};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 4rem 1rem;
  }
`;
const TabbleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.button.list.background};
  max-width: 100%;
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
const Table = styled.table`
  border-collapse: collapse;

  th,
  td {
    border: 2px solid ${({ theme }) => theme.background[1]};
    text-align: center;
    min-height: 3rem;
    height: 3rem;
    min-width: 8rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
      min-width: 7rem;
    }
  }
  th {
    border-color: ${({ theme }) => theme.background[2]};
  }
  .amount-page {
    min-width: 7rem;
    max-width: 7rem;
    border-color: ${({ theme }) => theme.background[2]};
  }
  td {
    font-family: "Roboto", sans-serif;
    > div {
      display: flex;
      background: ${({ theme }) => theme.background[2]};
      cursor: pointer;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
    }
    :hover {
      > div {
        color: ${({ theme }) => theme.color[8]};
        border: 2px solid ${({ theme }) => theme.button.primary.background};
      }
    }
  }
`;
