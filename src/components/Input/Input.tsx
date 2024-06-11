import { useState } from "react";
import { Control, Controller } from "react-hook-form";

import "./../../index.css";
import { SignInTypes } from "../../validators/signInSchemaValidation";
interface InputProps {
  control: Control<SignInTypes>;
  type: string;
  className: string;
  label: string;
  error: string | undefined;
  name: keyof SignInTypes;
}

const InputComponent: React.FC<InputProps> = ({
  control,
  type,
  className,
  label,
  error,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`input-wrapper ${className}`}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-6 focus:outline-none focus:shadow-outline ${error ? "border-red-500" : "focus:border-blue-500"}`}
            placeholder=" "
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
      />
      <label
        className={`text-gray-500 ${error ? "text-red-500" : isFocused ? "text-blue-500" : ""}`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default InputComponent;
