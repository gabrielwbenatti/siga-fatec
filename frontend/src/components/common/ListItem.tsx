interface SigaListItemProps {
  //   title?: string;
  //   subtitle?: string;
  //   leadingIcon?: JSX.Element;
  children: JSX.Element | JSX.Element[];
}

function SigaListItem({ ...props }: SigaListItemProps) {
  return (
    <>
      <div className="flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5">
        {props.children}
      </div>
    </>
    // <>
    //   <div className="flex items-center gap-4 py-2 ps-4 pe-8 cursor-pointer bg-light-surfaceContainerLow hover:bg-light-onSurface/5">
    //     {props.leadingIcon && props.leadingIcon}
    //     <div className="flex flex-col">
    //       {props.title && (
    //         <h3 className="font-semibold text-lg">{props.title}</h3>
    //       )}
    //       {props.subtitle && <span className="text-sm">{props.subtitle}</span>}
    //       {props.children && props.children}
    //     </div>
    //   </div>
    // </>
  );
}

export default SigaListItem;
