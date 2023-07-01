import { Fragment, HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
const LabeledInput = <T extends FieldValues>({
  type,
  register,
  label,
  inputName,
  inputAdditionalStyles,
  labelAdditionalStyles,
  required = false,
  error,
  errorMessage,
  min,
}: {
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  label: string;
  inputName: Path<T>;
  inputAdditionalStyles?: string;
  labelAdditionalStyles?: string;
  required?: boolean;
  error?: FieldError;
  errorMessage?: string;
  min?: number;
}) => {
  return (
    <Fragment>
      <label
        className={`font-bold mb-2 block ${labelAdditionalStyles}`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        className={`block rounded-md transition duration-500 w-full border border-ccc p-1 mb-2 focus:border focus:border-purple-600 focus:outline-none ${inputAdditionalStyles}`}
        type={type}
        {...register(inputName, { required: required, min: min })}
      />
      {error && (
        <div className="font-bold text-red-500 text-sm mb-2">
          {errorMessage}
        </div>
      )}
    </Fragment>
  );
};

export default LabeledInput;
