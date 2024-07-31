import { MenuIcon } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const SigaSideBarContext = createContext({ expanded: true });

interface SigaSideBarProps {
  children: ReactNode;
}

function SigaSideBar({ ...props }: SigaSideBarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="">
        <nav className="h-full flex flex-col bg-light-surface border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center ">
            <p
              className={`transition-all overflow-hidden ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              SIGA
            </p>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-light-surface hover:bg-light-surfaceTint/5"
            >
              <MenuIcon />
            </button>
          </div>

          <SigaSideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{props.children}</ul>
          </SigaSideBarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

interface SigaSideBarItemProps {
  icon: JSX.Element;
  text: string;
  path: string;
  onClick?: (path: string) => void;
}

function SigaSideBarItem({ ...props }: SigaSideBarItemProps) {
  const { expanded } = useContext(SigaSideBarContext);

  const location = useLocation();

  const isActive = (path: string) => {
    return path === location.pathname || location.pathname.startsWith(path);
  };

  const handleClick = () => {
    if (props.onClick) props.onClick(props.path);
  };

  return (
    <>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-lg cursor-pointer 
        transition-colors group max-h-14 ${
          isActive(props.path)
            ? "bg-light-primaryContainer text-light-onPrimaryContainer"
            : "hover:bg-light-surfaceTint/5 text-light-onSurfaceVariant"
        }
        `}
        onClick={handleClick}
      >
        {props.icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {props.text}
        </span>
        {!expanded && (
          <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-200 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
            {props.text}
          </div>
        )}
      </li>
    </>
  );
}

export { SigaSideBar as SigaSideMenu, SigaSideBarItem };
