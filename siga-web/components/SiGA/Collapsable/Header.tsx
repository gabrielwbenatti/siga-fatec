import { FC, ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  actions?: ReactNode;
  onClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  children,
  actions,
  onClick,
}: HeaderProps) => {
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

export default Header;
