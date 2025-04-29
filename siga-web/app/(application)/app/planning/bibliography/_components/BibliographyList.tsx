"use client";

import {
  deleteBibliography,
  fetchBibliography,
} from "@/app/actions/bibliographyActions";
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

  const handleDelete = async (bibliographyId: number | string) => {
    try {
      const result = await deleteBibliography(bibliographyId);
      if (!result.success) {
        toast.error(result.error);
      }
      // Remove the deleted bibliography from the state
      setData((prev) => prev.filter((item) => item.id !== bibliographyId));
      toast.success("Bibliografia deletada com sucesso!");
    } catch (error) {
      console.log("Erro ao deletar a bibliografia:", error);
      toast.error("Erro ao deletar a bibliografia.");
    }
  };

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
                  onDelete={handleDelete}
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
