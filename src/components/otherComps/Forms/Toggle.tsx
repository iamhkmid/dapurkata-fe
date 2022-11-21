import { forwardRef, useEffect, useRef, useState } from "react";
import { TForm, TToggle } from "../../../types/TFormControl";
import * as El from "./ToggleElement";
type props = TToggle & TForm;
const Toggle = forwardRef<HTMLInputElement, props>((props, ref) => {
  const { isLoading, disabled, name, register } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [enabled, setEnabled] = useState(false);
  const handleCheckboxChange = (e) => {
    setEnabled(e.target.checked);
  };

  useEffect(() => {
    setEnabled(inputRef.current.checked);
  }, [isLoading, disabled]);

  return (
    <El.Label>
      <El.HiddenToggle
        type="checkbox"
        checked={enabled}
        onChange={handleCheckboxChange}
        ref={(ref) => {
          register(ref);
          inputRef.current = ref;
        }}
        name={name}
      />
      <El.StyledToggle
        checked={enabled}
        disabled={disabled}
        isLoading={isLoading}
      ></El.StyledToggle>
      <El.TextLabel>{props.label}</El.TextLabel>
    </El.Label>
  );
});
export default Toggle;
