import { forwardRef, useRef, useState } from "react";
import { TCheckbox, TForm } from "../../../types/TFormControl";
import IconsControl from "../../IconsControl";
import * as El from "./CheckboxElement";
type props = TCheckbox & TForm;
const Checkbox = forwardRef<HTMLInputElement, props>((props, ref) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <El.Label>
      <El.HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        ref={(ref) => props.register(ref)}
        name={props.name}
      />
      <El.StyledCheckbox checked={checked}>
        <El.IconWrapper>{IconsControl("check")}</El.IconWrapper>
      </El.StyledCheckbox>
      <El.TextLabel>{props.label}</El.TextLabel>
    </El.Label>
  );
});
export default Checkbox;
