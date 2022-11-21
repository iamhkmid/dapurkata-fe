export type TInput = {
  childRef?: (ref: HTMLInputElement) => void;
  control: "input";
  type: "text" | "number" | "password";
  step?: string;
  withIcon?: boolean;
  placeholder?: string;
  register?: (ref: HTMLInputElement) => void;
  autoComplete?: string;
};
export type TSelect = {
  control: "select";
  options: { value: string; id: string }[];
  clearError: (name?: any) => void;
  register: (ref: HTMLSelectElement) => void;
};
export type TSelectMultiple = {
  control: "selectMultiple";
  options: { value: string; id: string }[];
  clearError: (name: string) => void;
  register: (ref: HTMLSelectElement) => void;
};
export type TFile = {
  control: "file";
  currURL?: string;
  accept: string;
  register: (ref: HTMLInputElement) => void;
};
export type TTextarea = {
  control: "textarea";
  placeholder?: string;
  register: (ref: HTMLTextAreaElement) => void;
};
export type TCheckbox = {
  control: "checkbox";
  register: (ref: HTMLInputElement) => void;
};
export type TToggle = {
  control: "toggle";
  register: (ref: HTMLInputElement) => void;
};

export type TForm = {
  name: string;
  label?: string;
  error: boolean;
  message: string;
  isLoading?: boolean;
  disabled?: boolean;
};
export type TPropsFormControl = TForm &
  (
    | TInput
    | TSelect
    | TSelectMultiple
    | TFile
    | TTextarea
    | TCheckbox
    | TToggle
  );
