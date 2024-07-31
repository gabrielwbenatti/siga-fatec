interface SigaListWrapperProps {
  showCount?: boolean;
  children: JSX.Element[];
}

function SListWrapper({ showCount = false, children }: SigaListWrapperProps) {
  const lbl =
    children.length === 0
      ? "Nenhum registro"
      : children.length === 1
      ? "1 registro"
      : `${children.length} registros`;

  return (
    <>
      {showCount && children.length > 0 && <div className="text-sm">{lbl}</div>}

      <div className="rounded-3xl overflow-hidden bg-light-surfaceContainerLow">
        <ul>
          {children.map((child, index) => (
            <>
              {child} {index !== children.length - 1 && <hr />}
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SListWrapper;
