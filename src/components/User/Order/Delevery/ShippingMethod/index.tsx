import { useContext } from "react";
import { couriers } from "../../../../../data/courier";
import RadioButton from "./RadioButton";
import Select from "./Select";
import * as El from "./ShippingMethodElement";

const ShippingMethod = () => {
  return (
    <El.Main>
      <Select />
      <RadioButton />
    </El.Main>
  );
};

export default ShippingMethod;
