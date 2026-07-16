import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl bg-black px-6 py-3 text-white transition hover:bg-yellow-700",
        className
      )}
    >
      {children}
    </button>
  );
}