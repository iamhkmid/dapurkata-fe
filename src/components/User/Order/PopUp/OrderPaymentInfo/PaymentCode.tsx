import { FC } from "react";
import styled from "styled-components";

type Props = {
  paymentServiceId: string;
  data: { name: string; value: string }[];
};

const PaymentCode: FC<Props> = (props) => {
  const { data, paymentServiceId } = props;

  switch (paymentServiceId) {
    case "BCA_BANK_TRANSFER": {
      return <BankTransferType1 data={data} />;
    }
    case "BRI_BANK_TRANSFER": {
      return <BankTransferType1 data={data} />;
    }
    case "BNI_BANK_TRANSFER": {
      return <BankTransferType1 data={data} />;
    }
    case "PERMATA_BANK_TRANSFER": {
      return <BankTransferType1 data={data} />;
    }
    case "MANDIRI_BILL_BANK_TRANSFER": {
      return <BankTransferType2 data={data} />;
    }
    case "INDOMARET_CSTORE": {
      return <Cstore data={data} />;
    }
    case "ALFAMART_CSTORE": {
      return <Cstore data={data} />;
    }

    default:
      return null;
  }
};

export default PaymentCode;

type TPCode = {
  data: { name: string; value: string }[];
};
const BankTransferType1: FC<TPCode> = ({ data }) => (
  <Main>
    <Section>
      <Code>
        <div>
          <div className="name">VA NUMBER</div>
          <div className="value">
            {data.find((val) => val.name === "va_number")?.value}
          </div>
        </div>
      </Code>
    </Section>
  </Main>
);

const BankTransferType2: FC<TPCode> = ({ data }) => (
  <Main>
    <Section>
      <Code>
        <div>
          <div className="name">BILLER CODE</div>
          <div className="value bill-code">
            {data.find((val) => val.name === "biller_code")?.value}
          </div>
        </div>
        <div>
          <div className="name">BILL KEY</div>
          <div className="value">
            {data.find((val) => val.name === "bill_key")?.value}
          </div>
        </div>
      </Code>
    </Section>
  </Main>
);

const Cstore: FC<TPCode> = ({ data }) => (
  <Main>
    <Section>
      <Code>
        <div>
          <div className="name">KODE PEMBAYARAN</div>
          <div className="value">
            {data.find((val) => val.name === "payment_code")?.value}
          </div>
        </div>
      </Code>
    </Section>
  </Main>
);

const Main = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = styled.h1`
  color: ${({ theme }) => theme.color[2]};
  font-size: 0.9rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  > div > div.name {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.color[2]};
    font-size: 0.8rem;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  > div > div.value {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.button.hover.list.background};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.8rem 2rem;
    min-width: 50%;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
    font-size: 2rem;
    line-height: 1;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.5rem;
    }
  }
  > div > div.value.bill-code {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.3rem;
    }
  }
`;
