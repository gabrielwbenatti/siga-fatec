function SigaListWrapper({
  children,
  showCount = false,
}: {
  showCount?: boolean;
  children: JSX.Element[];
}) {
  return (
    <>
      <div className="rounded-3xl overflow-hidden">
        <ul>{children}</ul>
      </div>

      {showCount && <div>{children.length} registros </div>}
    </>
  );
}

export default SigaListWrapper;
