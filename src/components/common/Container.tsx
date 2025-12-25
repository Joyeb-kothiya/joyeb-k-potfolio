import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto max-w-3xl px-4 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}