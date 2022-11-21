import { useQuery } from "@apollo/client";
import { AnimateSharedLayout, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { HOW_TO_PAY } from "../../../../../graphql/transaction/queries";
import { TGQLHowToPay } from "../../../../../types/transaction";
type TProps = {
  paymentServiceId: string;
};

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

const HowToPay: FC<TProps> = ({ paymentServiceId }) => {
  const [selected, setSelected] = useState<string>("");
  const { data, error, loading } = useQuery<TGQLHowToPay>(HOW_TO_PAY, {
    skip: !paymentServiceId,
    fetchPolicy: "network-only",
    variables: { paymentId: paymentServiceId },
  });

  useEffect(() => {
    if (data?.howToPay?.length > 0) {
      setSelected(data.howToPay[0].name);
    }
  }, [data?.howToPay]);
  return (
    <Main>
      <h1 className="name">Cara Pembayaran</h1>
      <div>
        <AnimateSharedLayout>
          <div className="menu">
            {data?.howToPay?.map((val) => (
              <div
                key={val.name}
                className="item"
                onClick={() => setSelected(val.name)}
              >
                <h1>{val.name}</h1>
                {selected === val.name && (
                  <motion.div
                    className="selected"
                    layoutId="menu_htp"
                    initial={false}
                    transition={spring}
                  />
                )}
              </div>
            ))}
          </div>
        </AnimateSharedLayout>
        <table className="stages">
          <tbody>
            {data?.howToPay
              ?.find((htp) => htp.name === selected)
              ?.stages.map((stage, i) => (
                <tr key={stage} className="stage">
                  <td className="count">{i + 1}</td>
                  <td className="value">{stage}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default HowToPay;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div {
    padding: 0 1rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      padding: 0;
    }
  }
  .name {
    color: ${({ theme }) => theme.color[2]};
    font-size: 0.9rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  .menu {
    display: flex;
    width: 100%;
    padding: 0.5rem 0;
    gap: 0.5rem;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      padding: 0.3rem 0;
      cursor: pointer;
      > h1 {
        position: relative;
        z-index: 2;
        font-weight: 500;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.button.hover.list.color};
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 0.7rem;
        }
      }
      .selected {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        border-radius: ${({ theme }) => theme.borderRadius};
        background: ${({ theme }) => theme.button.hover.list.background};
      }
    }
  }
  .stages {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    border-radius: 0.2rem;
    border: 2px solid ${({ theme }) => theme.button.hover.list.background};
    gap: 0.5rem;
    max-height: 12rem;
    min-height: 12rem;
    overflow-y: auto;
    > div {
      display: flex;
      gap: 1rem;
      flex-direction: column;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar.v1.thumb};
      border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
    }
    .stage {
      font-size: 0.8rem;
      .value {
        font-family: "Poppins", sans-serif;
        padding: 0.2rem 0;
        padding-left: 0.6rem;
      }
      .count {
        font-family: "Roboto", sans-serif;
        text-align: end;
        font-size: 0.9rem;
        font-weight: 600;
        color: ${({ theme }) => theme.button.hover.list.color};
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 0.8rem;
        }
      }
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
      }
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      padding: 0.5rem;
    }
  }
`;
