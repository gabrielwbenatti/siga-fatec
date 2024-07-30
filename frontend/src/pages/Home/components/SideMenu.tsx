import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";

const SideBarContext = createContext({ expanded: true });

function SigaSideMenu({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="h-screen ">
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
              className="p-1.5 rounded-md bg-light-surface hover:bg-light-surfaceTint/5"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SideBarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

function SigaSideBarItem({
  icon,
  text,
  active = false,
}: {
  icon: JSX.Element;
  text: string;
  active?: boolean;
}) {
  const { expanded } = useContext(SideBarContext);

  return (
    <>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group ${
          active
            ? "bg-light-primaryContainer text-light-onPrimaryContainer"
            : "hover:bg-light-surfaceTint/5 text-light-onSurfaceVariant"
        }
        `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {!expanded && (
          <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-200 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
            {text}
          </div>
        )}
      </li>
    </>
  );
}

export { SigaSideMenu, SigaSideBarItem };
