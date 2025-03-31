import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Root: FC<Props> = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};

export default Root;
