import React, { MouseEventHandler } from "react";

interface SigaListWrapperProps<T> {
  items: T[];
  showCount?: boolean;
  renderItem: (item: T) => React.ReactNode;
  onItemClick?: (item: T) => void;
  keyExtractor: (item: T, index: number) => React.Key;
}

function SListWrapper<T>({ ...props }: SigaListWrapperProps<T>) {
  const lbl =
    props.items.length === 0
      ? "Nenhum registro"
      : props.items.length === 1
      ? "1 registro"
      : `${props.items.length} registros`;

  return props.items.length > 0 ? (
    <>
      {/* Label de quantidade de registros */}
      {props.showCount && props.items.length > 0 && (
        <div className="text-sm">{lbl}</div>
      )}

      {/* Listagem do conteúdo */}
      <ul className="rounded-3xl overflow-hidden bg-light-surfaceContainerLow pb-1">
        {props.items.map((item, index) => (
          <li
            key={props.keyExtractor(item, index)}
            onClick={() => props.onItemClick?.(item)}
          >
            {props.renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h3>Nenhuma informação</h3>
  );
}

export default SListWrapper;
