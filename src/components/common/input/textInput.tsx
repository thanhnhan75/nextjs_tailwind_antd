import type { ITextInputField, ITextInputFormField, ITextSearchField } from "@/types/component/common/IInput";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useField } from "formik";

export function TextInputField(props: ITextInputField): JSX.Element {
  return (
    <>
      {props.title && (
        <label htmlFor={props.name} className="font-medium text-neutral">
          {props.title}
        </label>
      )}
      <input
        {...props}
        type={props.type}
        className={`py-2 px-3 flex placeholder:text-coolGray-700 font-sans text-coolGray-1200 transition-all duration-300 border border-coolGray-300 rounded-md focus:outline focus:outline-1 focus:outline-primary-1000`}
        name={props.name}
        placeholder={props.placeholder}
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </>
  );
}

export function TextInputFormField(props: ITextInputFormField): JSX.Element {
  const { label } = props;
  const [field, meta] = useField(props.label);

  return (
    <div>
      <label htmlFor={props.id ?? props.name}>{label}</label>
      <input {...field} {...props} className={meta.touched && meta.error ? "error" : ""} />
      {meta.touched && meta.error ? <div className="error-message">{meta.error}</div> : null}
    </div>
  );
}

export function TextSearchField(props: ITextSearchField): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event);
  };

  return (
    <div
      className={`bg-shades-0 rounded-md border border-coolGray-200 px-3 flex items-center ${props.className && props.className}`}
      {...props}
    >
      <MagnifyingGlass size={20} />
      <input
        type="search"
        value={props.value}
        className="w-full text-gray-900 text-sm rounded-md focus:outline-none px-3 py-2 text-regular14 text-coolGray-700"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
