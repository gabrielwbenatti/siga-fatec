import { FC, ReactNode } from "react";

interface Props {
  href: string;
  caption: string;
  icon: ReactNode;
}

const Item: FC<Props> = ({ href, caption, icon }: Props) => {
  return (
    <a
      href={href}
      className="grid w-full gap-1 rounded-lg border bg-white px-4 pb-4 pt-10 shadow-sm hover:shadow-md"
    >
      {icon}
      <span>{caption}</span>
    </a>
  );
};

export default Item;
