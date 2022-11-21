import { forwardRef, MutableRefObject } from "react";
import {
  TPropsFormControl,
  TInput,
  TTextarea,
  TSelect,
  TSelectMultiple,
  TCheckbox,
  TFile,
  TForm,
  TToggle,
} from "../../../types/TFormControl";
import Checkbox from "./Checkbox";
import File from "./File";
import Input from "./Input";
import Select from "./Select";
import SelectMultiple from "./SelectMultiple";
import TextArea from "./TextArea";
import Toggle from "./Toggle";
type TRef = { focus?: () => void; reset?: () => void };
const FormsControl = forwardRef<TRef, TPropsFormControl>((props, ref) => {
  const { control } = props;
  switch (control) {
    case "input": {
      const { ...rest } = props as TInput & TForm;
      return <Input ref={ref} {...rest} />;
    }
    case "textarea": {
      const { ...rest } = props as TTextarea & TForm;
      return <TextArea {...rest} />;
    }
    case "select": {
      const { ...rest } = props as TSelect & TForm;
      return <Select ref={ref} {...rest} />;
    }
    case "selectMultiple": {
      const { ...rest } = props as TSelectMultiple & TForm;
      return <SelectMultiple {...rest} />;
    }
    case "checkbox": {
      const { ...rest } = props as TCheckbox & TForm;
      return <Checkbox {...rest} />;
    }
    case "toggle": {
      const { ...rest } = props as TToggle & TForm;
      return <Toggle {...rest} />;
    }
    case "file": {
      const { ...rest } = props as TFile & TForm;
      return <File ref={ref} {...rest} />;
    }
    default:
      return null;
  }
});

export default FormsControl;
