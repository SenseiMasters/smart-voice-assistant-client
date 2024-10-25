"use client";

import { classNames } from "@/utils/classNames";

interface ITextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<ITextareaProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div>
      {!!label && <p>{label}</p>}
      <textarea
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
