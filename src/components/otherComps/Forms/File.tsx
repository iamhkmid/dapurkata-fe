import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TFile, TForm } from "../../../types/TFormControl";
import * as El from "./FileElement";
import TextError from "./TextMessage";
type props = TFile & TForm;
const File = forwardRef<{ reset?: () => void }, props>((props, ref) => {
  const htmlRef = useRef(null);
  const { label, name, error, message, register, currURL, accept } = props;
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileName(e.target.files[0].name);
    }
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setFile(null);
      setFileName(null);
    },
  }));
  const clearField = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <El.InputContainer>
      <El.Label>{label}</El.Label>
      <El.InputWrapper className={error && "error"}>
        <El.StyledInput htmlFor={name}>Pilih file</El.StyledInput>
        <El.HiddenInput
          id={name}
          ref={(ref) => register(ref)}
          name={name}
          type="file"
          onChange={onChange}
          accept={accept}
          autoComplete={name.includes("password") ? "new-password" : "off"}
        />
        {file ? (
          <El.ImagePreview src={file} />
        ) : currURL ? (
          <El.ImagePreview src={currURL} />
        ) : (
          <El.NoImage>Tidak ada file</El.NoImage>
        )}
        {fileName ? (
          <El.FileName>{fileName}</El.FileName>
        ) : (
          <El.FileName>...</El.FileName>
        )}
        {/* <El.BorderBottom /> */}
      </El.InputWrapper>
      <TextError message={message} color="danger" />
    </El.InputContainer>
  );
});

export default File;
