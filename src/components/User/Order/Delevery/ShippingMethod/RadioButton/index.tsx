import * as El from "./RadioButtonElement";
import { useContext, useEffect, useRef } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { useState } from "react";
import NumberFormat from "react-number-format";
import Loading from "./Loading";
import { ShoppingCartCtx } from "../../../../../../contexts/ShoppingCartCtx";
import { useGQLCCost } from "./useGQL";

const RadioButton = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [selected, setSelected] = useState<string>(null);

  const { data, loading } = useGQLCCost({
    courier: order.courier.selected.code,
    destination: order.recipient.data.recipient?.City.id,
    weight:
      order.order.type === "buy-now" ? order.order.weight : shoppingCart.weight,
  });

  type TCS = { service: string; cost: number; desc: string; etd: string };
  const changeSelected = (props: TCS) => {
    const { service, cost, desc, etd } = props;
    setSelected(service);
    dispatch({
      type: "SET_COURIER_SERVICE",
      value: {
        code: data.code,
        name: data.name,
        service,
        cost,
        description: desc,
        etd,
      },
    });
  };
  useEffect(() => {
    if (data && data.costs.length > 0) {
      changeSelected({
        service: data.costs[0].service,
        cost: data.costs[0].cost[0].value,
        desc: data.costs[0].description,
        etd: data.costs[0].cost[0].etd,
      });
    }
  }, [data]);

  return (
    <El.Main>
      {loading && <Loading />}
      {!loading &&
        !order.courier.error &&
        data?.costs.map((val) => (
          <El.InputRadio
            key={val.service}
            isSelected={selected === val.service}
            onClick={() =>
              changeSelected({
                service: val.service,
                cost: val.cost[0].value,
                desc: val.description,
                etd: val.cost[0].etd,
              })
            }
          >
            <El.Detail>
              <h1 className="text-service">{val.service}</h1>
              <h1 className="text-description">{val.description}</h1>
              <h1 className="text-cost">
                <NumberFormat
                  prefix="Rp"
                  value={val.cost[0].value}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                />
              </h1>
            </El.Detail>
            <El.Estimation className="estimation">{`${val.cost[0].etd
              .toLowerCase()
              .replace("hari", "")} Hari`}</El.Estimation>
          </El.InputRadio>
        ))}
    </El.Main>
  );
};

export default RadioButton;
