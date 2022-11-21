import { forwardRef } from "react";
import { TForm, TTextarea } from "../../../types/TFormControl";
import Loading2 from "../Loading/Loading2";
import * as El from "./TextAreaElement";
import TextError from "./TextMessage";

type props = TTextarea & TForm;
const TextArea = forwardRef<HTMLTextAreaElement, props>((props, ref) => {
  const {
    label,
    name,
    error,
    message,
    register,
    placeholder,
    disabled,
    isLoading,
  } = props;
  return (
    <El.InputContainer>
      <El.Label htmlFor={name}>{label}</El.Label>
      <El.InputWrapper>
        <El.InputElement
          className={error && "error"}
          ref={(ref) => register(ref)}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          isLoading={isLoading}
        />
        {isLoading && (
          <El.LoadingWrapper>
            <Loading2 />
          </El.LoadingWrapper>
        )}
      </El.InputWrapper>
      <TextError message={message} color="danger" />
    </El.InputContainer>
  );
});

export default TextArea;
