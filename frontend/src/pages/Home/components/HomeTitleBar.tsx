import { HTMLAttributes, useEffect, useState } from "react";
import { Class } from "../../../types/Class";
import { getClassObj } from "../../../utils";
import toast from "react-hot-toast";

interface SigaTitleBarProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export default function HomeTitleBarComp({ ...props }: SigaTitleBarProps) {
  const [clss, setClss] = useState<Class>();

  useEffect(() => {
    const loadClassInfo = async () => {
      const classObj = getClassObj();

      if (!classObj) {
        toast.error("Class undefined, try again");
        return;
      }

      setClss(classObj);
    };

    loadClassInfo();
  }, []);

  return (
    <div
      {...props}
      className={`flex h-10 items-center justify-between ${props.className}`}
    >
      <h1 className="text-lg flex-1 font-bold line-clamp-1">
        {props.title ||
          `${clss?.discipline.abbreviation} - ${clss?.discipline.name}`}
      </h1>

      {props.children}
    </div>
  );
}
