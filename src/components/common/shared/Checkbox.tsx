import React, { useId } from "react";

interface CheckboxProps {
  label?: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  leftValue?: string;
  showRemoveButton?: boolean;
  onRemove?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  leftValue,
  showRemoveButton,
  onRemove,
  ...props
}) => {
  const id = useId();
  return (
    <div className="flex items-center justify-between">
        {/* Checkbox */}
        <div className="flex items-center space-x-2">
            {/* Checkbox Input */}
            <div className="relative flex items-center justify-center">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="h-4 w-4 border border-secondary-100 rounded-[5px] hover:border-primary-500 appearance-none cursor-pointer"
                    {...props}
                />
                {/* check icon and background */}
                {checked && (
                    <span
                    className={`absolute inset-0 flex items-center justify-center transition-colors duration-200 ${
                        checked ? "bg-primary-500" : "bg-transparent"
                    } rounded-[5px]`}
                    onClick={() => onChange(!checked)}
                    >
                    <i className="bi bi-check text-white text-sm"></i>
                    </span>
                )}
            </div>

            {/* Label text */}
            {label && (
                <label htmlFor={id} className="text-sm text-black cursor-pointer">
                    {label}
                </label>
            )}
        </div>

        {/* Left value or remove button */}
        {leftValue ? (
            <span className="text-xs text-secondary-700">{leftValue}</span>
        ) : (
            showRemoveButton && (
                <button
                    type="button"
                    onClick={onRemove}
                    className="text-secondary-700 hover:bg-slate-100"
                >
                    <i className="bi bi-x"></i>
                </button>
            )
        )}
    </div>
  );
};

export default Checkbox;
