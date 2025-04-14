import { FC, ReactNode } from "react";

interface Props {
  href: string;
  caption: string;
  icon: ReactNode;
  soon?: boolean;
}

const Item: FC<Props> = ({ href, caption, icon, soon = false }: Props) => {
  return (
    <a
      href={href}
      className="relative grid w-full gap-1 rounded-lg border bg-white px-4 pb-4 pt-10 shadow-sm hover:shadow-md"
    >
      {icon}
      <span>{caption}</span>
      {soon && (
        <span className="absolute right-0 top-0 m-2 rounded-full bg-red-500 p-1 text-sm text-white">
          em breve
        </span>
      )}
    </a>
  );
};

export default Item;
