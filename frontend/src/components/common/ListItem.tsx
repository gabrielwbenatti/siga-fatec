interface SigaListItemProps {
  children: JSX.Element | JSX.Element[];
}

function SigaListItem({ ...props }: SigaListItemProps) {
  return (
    <>
      <div className="flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5">
        {props.children}
      </div>
    </>
  );
}

export default SigaListItem;
