import moment from "moment";
import "moment/locale/id";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import * as El from "./OrdersElement";
import TransactionStatus from "./TransactionStatus";
import { useGQLOrders } from "./useGQL";

const Orders = () => {
  const { data, error, loading } = useGQLOrders();
  const { dispatch } = useContext(UserNavCtx);
  return (
    <El.Main>
      <El.Section>
        <El.TableOrders>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total Bayar</th>
              <th>Pembayaran</th>
              <th>Status</th>
              <th>Waktu Transaksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => {
              return (
                <tr
                  key={val.id}
                  onClick={() =>
                    dispatch({
                      type: "SHOW_POPUP",
                      value: { name: "ORDER_DETAIL", orderId: val.id },
                    })
                  }
                >
                  <td>
                    <El.OrderId>{val.id}</El.OrderId>
                  </td>
                  <td>
                    <El.GrossAmount>
                      {`${val.currency} `}
                      <NumberFormat
                        value={val.grossAmount}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </El.GrossAmount>
                  </td>
                  <td>
                    <El.Payment>
                      <div>{val.PaymentService?.PaymentType?.name}</div>
                      <div>{val.PaymentService?.name}</div>
                    </El.Payment>
                  </td>
                  <td>
                    <TransactionStatus status={val.transactionStatus} />
                  </td>
                  <td>
                    <El.TransactionTime>
                      {moment(val.transactionTime)
                        .locale("id")
                        .format("dddd, DD MMMM YYYY | HH:mm")}
                    </El.TransactionTime>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </El.TableOrders>
      </El.Section>
    </El.Main>
  );
};

export default Orders;
