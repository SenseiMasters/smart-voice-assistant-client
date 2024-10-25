"use client";

import { classNames } from "@/utils/classNames";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
}

export const Input: React.FC<IInputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div>
      {!!label && <p>{label}</p>}
      <input
        type="text"
        className={classNames(
          "bg-gray-100/70 rounded-xl border-gray-300 border w-full",
          "placeholder:text-gray-500 py-2 px-3",
          className
        )}
        {...props}
      />
      {!!error && <p>{error}</p>}
    </div>
  );
};
