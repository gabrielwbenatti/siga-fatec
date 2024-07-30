function SigaListItem({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <>
      <li className="flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5">
        {children}
      </li>
    </>
  );
}

export default SigaListItem;
