"use client";

import { fetchBibliography } from "@/app/actions/bibliographyActions";
import ClassBibliography from "@/types/ClassBibliography";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BibliographyListItem from "./BibliographyListItem";

const BibliographyList = () => {
  const [data, setData] = useState<ClassBibliography[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await fetchBibliography();

      if (!result.success) {
        toast.error(result.error);
      }

      setIsLoading(false);
      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col px-4">
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <span className="mb-4 block text-sm text-gray-500">
            {`${data.length} ${data.length === 1 ? "registro" : "registros"}`}
          </span>

          {data.length === 0 ? (
            <div>Nenhuma informação para exibir.</div>
          ) : (
            <ul className="flex flex-col gap-3">
              {data.map((bibliography) => (
                <BibliographyListItem
                  key={bibliography.id}
                  bibliography={bibliography}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default BibliographyList;
