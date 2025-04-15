interface Props {
  children: React.ReactNode;
  className?: string;
}

const Root = ({ children, className }: Props) => {
  return (
    <>
      <div className={`flex flex-col gap-2 ${className}`}>{children}</div>
    </>
  );
};

export default Root;
