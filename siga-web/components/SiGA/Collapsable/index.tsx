"use client";

import { ReactNode } from "react";

const Collapsable = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <div className="rounded-lg border shadow-sm">{children}</div>;
};

const CollapsableHeader = ({
  children,
  actions,
  onClick,
}: Readonly<{
  children: ReactNode;
  actions?: ReactNode;
  onClick?: () => void;
}>) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-between bg-gray-100 p-2 hover:bg-gray-200"
      onClick={onClick}
    >
      <div>{children}</div>
      <div>{actions}</div>
    </div>
  );
};

const CollapsableBody = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <div className="border-t p-2">{children}</div>;
};

export { Collapsable, CollapsableBody, CollapsableHeader };
