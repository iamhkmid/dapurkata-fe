import { TRecipient } from "./recipient";

export type TProvince = {
  province_id: string;
  province: string;
};

export type TGQLProvinces = {
  provinces: TProvince[];
};

export type TCities = {
  city_id: string;
  city_name: string;
};

export type TGQLCities = {
  cities: TCities[];
};

export type TCourierCost = {
  code: string;
  name: string;
  costs: {
    service: string;
    description: string;
    cost: { value: number; etd: string; note: string }[];
  }[];
};

export type TGQLCCost = {
  courierCost: TCourierCost;
};
export type TCourierIsActive = {
  code: string;
  name: string;
};
export type TGQLCourierIsActive = {
  courier: TCourierIsActive[];
};
