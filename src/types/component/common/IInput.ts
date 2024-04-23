import type { FieldAttributes } from "formik";

export interface ITextInputField
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title: string;
  name: string;
  handleChange: any;
  placeholder?: string;
}

export interface ITextInputFormField extends FieldAttributes<any> {
  id?: string;
  label: string;
}

export interface ITextSearchField
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
