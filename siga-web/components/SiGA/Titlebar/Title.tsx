import { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }: TitleProps) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default Title;
