import React from "react";

interface SigaListWrapperProps<T> {
  items: T[];
  showCount?: boolean;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T, index: number) => React.Key;
}

function SListWrapper<T>({ ...props }: SigaListWrapperProps<T>) {
  const lbl =
    props.items.length === 0
      ? "Nenhum registro"
      : props.items.length === 1
      ? "1 registro"
      : `${props.items.length} registros`;

  return (
    <>
      {props.showCount && props.items.length > 0 && (
        <div className="text-sm">{lbl}</div>
      )}

      <ul className="rounded-3xl overflow-hidden bg-light-surfaceContainerLow pb-1">
        {props.items.map((item, index) => (
          <li key={props.keyExtractor(item, index)}>
            {props.renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SListWrapper;
