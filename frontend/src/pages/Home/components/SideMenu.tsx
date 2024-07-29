interface SigaSideMenuItemProps {
  selected: boolean;
  title: string;
}

interface SigaSideMenuProps {
  currentIndex: number;
  items: SigaSideMenuItemProps[];
  onDestinationSelected?: Function;
}

function SigaSideMenuItem(item: SigaSideMenuItemProps) {
  return (
    <>
      <div className="h-14 w-20 text-center flex flex-col items-center justify-center gap-1 cursor-pointer">
        <span
          className={`w-14 h-8 rounded-2xl px-3 text-light-onSecondaryContainer text-sm font-medium ${
            item.selected ? "bg-light-secondaryContainer" : "bg-transparent"
          } hover:bg-light-onSurface/5 flex items-center justify-center font-extrabold`}
        >
          O
        </span>
        <div>{item.title}</div>
      </div>
    </>
  );
}

function SigaSideMenu({ ...props }: SigaSideMenuProps) {
  return (
    <>
      <nav className="flex flex-col bg-light-surface pt-6">
        {props.items.map((e) => (
          <SigaSideMenuItem selected={e.selected} title={e.title} />
        ))}
      </nav>
    </>
  );
}

export { SigaSideMenu };

export type { SigaSideMenuItemProps as SigaSideMenuItem };
