import React, { forwardRef, useEffect, useState } from "react";

import { debounce } from "../../../utils/debounce";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  layout?: "horizontal" | "vertical";
  validate?: (value: string) => string | null;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      layout = "vertical",
      validate,
      value,
      onChange,
      className = "",
      rows = 4,
      ...props
    },
    ref
  ) => {
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);

    const debounceValidate = debounce((value: string) => {
      if (validate) {
        const errorMessage = validate(value);
        setError(errorMessage);
      }
    }, 500);

    useEffect(() => {
      if (touched) {
        debounceValidate(value || "");
      }
    }, [value, debounceValidate, touched]);

    return (
      <div
        className={`${
          layout === "horizontal" ? "flex items-start" : ""
        } w-full`}
      >
        {label && (
          <label
            className={`block text-black font-normal ${
              layout === "horizontal" ? "mr-2 w-1/3" : "mb-2"
            }`}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <textarea
            {...props}
            ref={ref}
            value={value}
            onChange={(e) => {
              onChange?.(e);
              setTouched(true);
            }}
            className={`border rounded-[5px] w-full py-2 px-2 text-black text-sm leading-tight focus:outline-none focus:border-primary-500 placeholder:text-sm ${
              error ? "border-red-500" : "border-secondary-100"
            } ${className}`}
            rows={rows}
            onBlur={() => setTouched(true)}
          />
          {error && layout === "horizontal" && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        </div>
        {error && layout === "vertical" && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
      </div>
    );
  }
);

export default TextArea;
