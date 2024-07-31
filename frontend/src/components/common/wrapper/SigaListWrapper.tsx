interface SigaListWrapperProps {
  showCount?: boolean;
  children: JSX.Element[];
}

function SigaListWrapper({
  children,
  showCount = false,
}: SigaListWrapperProps) {
  const lbl =
    children.length === 0
      ? "Nenhum registro"
      : children.length === 1
      ? "1 registro"
      : `${children.length} registros`;

  return (
    <>
      <div className="rounded-3xl overflow-hidden">
        <ul>{children}</ul>
      </div>

      {showCount && children.length > 0 && <div className="text-sm">{lbl}</div>}
    </>
  );
}

export default SigaListWrapper;
