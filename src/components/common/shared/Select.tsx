import React, { useEffect, useState, useId, useRef } from "react";

import { debounce } from "../../../utils/debounce";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  layout?: "horizontal" | "vertical";
  options: Option[];
  isMulti?: boolean;
  isClose?: boolean;
  placeholder?: string;
  value?: string | string[];
  validate?: (value: string | string[]) => string | null;
  onChange?: (value: string | string[]) => void;
  icon?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  dropdownClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  layout = "vertical",
  options,
  isMulti = false,
  isClose = false,
  placeholder = "Chọn...",
  value = isMulti ? [] : "",
  validate,
  onChange,
  icon,
  size = "medium",
  className = "",
  dropdownClassName = "",
}) => {
  const [selected, setSelected] = useState<string | string[]>(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  // Debounced validation function
  const debounceValidate = debounce((value: string | string[]) => {
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
    }
  }, 500);

  // Validate when selection changes
  useEffect(() => {
    if (touched) {
      debounceValidate(selected);
    }
  }, [selected, debounceValidate, touched]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    selectRef.current?.focus();
  };

  const handleBlur = () => {
    setTouched(true);

    if (validate) {
      const errorMessage = validate(selected);
      setError(errorMessage);
    }
  };
  

  const handleSelect = (optionValue: string) => {
    if (isMulti) {
      const currentValues = selected as string[];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      setSelected(newValues);
      onChange?.(newValues);
    } else {
      setSelected(optionValue);
      onChange?.(optionValue);
      setIsDropdownOpen(false);
    }
  };

  const isSelected = (optionValue: string) => {
    if (isMulti) {
      return (selected as string[]).includes(optionValue);
    }
    return selected === optionValue;
  };

  const sizeClasses = {
    small: "text-xs px-1 h-6",
    medium: "text-sm px-2 h-8",
    large: "text-base px-3 h-10",
  };

  const clearSelection = () => {
    setSelected(isMulti ? [] : "");
    onChange?.(isMulti ? [] : "");
  };

  return (
    <div
      className={`${layout === "horizontal" ? "flex items-start" : ""}`}
      ref={selectRef}
    >
      {label && (
        <label
          className={`block text-black font-normal ${
            layout === "horizontal" ? "mr-2 w-1/3" : "mb-2"
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={`relative bg-white ${className}`}>
        <div
          id={id}
          className={`border rounded-[5px] flex items-center gap-x-2 cursor-pointe ${
            sizeClasses[size]
          } ${error ? "border-red-500" : "border-secondary-100"}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {icon && (
            <span className="text-primary-500 flex items-center">
              <i className={`bi ${icon}`}></i>
            </span>
          )}
          <div className="text-black truncate flex-1">
            {isMulti
              ? (selected as string[]).length > 0
                ? (selected as string[])
                    .map(
                      (val) => options.find((opt) => opt.value === val)?.label
                    )
                    .join(", ")
                : placeholder
              : options.find((opt) => opt.value === selected)?.label ||
                placeholder}
          </div>
          {isHovered && (selected || isMulti) && isClose ? (
            <span
              className="text-secondary-100 cursor-pointer"
              onClick={clearSelection}
            >
              <i className="bi bi-x-circle-fill text-xs"></i>
            </span>
          ) : (
            <i
              className={`bi bi-chevron-down transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              } text-secondary-700 text-xs`}
            ></i>
          )}
        </div>

        {isDropdownOpen && (
          <ul
            className={`absolute z-10 w-full mt-1 py-2 border border-secondary-100 rounded-[5px] bg-white max-h-60 overflow-y-auto ${dropdownClassName}`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer hover:bg-slate-100 flex items-center justify-between ${
                  isSelected(option.value) ? "text-primary-500" : "text-black"
                } ${sizeClasses[size]}`}
                onClick={() => handleSelect(option.value)}
              >
                <span className="truncate">{option.label}</span>
                {isSelected(option.value) && (
                  <i className="bi bi-check2 text-primary-500"></i>
                )}
              </li>
            ))}
          </ul>
        )}

        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default Select;
