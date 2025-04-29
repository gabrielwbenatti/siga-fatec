import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ClassBibliography from "@/types/ClassBibliography";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  bibliography: ClassBibliography;
  onDelete?: (bibliographyId: number | string) => Promise<void>;
}

const BibliographyListItem = ({ bibliography, onDelete }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!bibliography.id || !onDelete) return;

    try {
      setIsLoading(true);
      await onDelete?.(bibliography.id);
    } catch (error) {
      console.log("Erro ao deletar a bibliografia:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="flex items-center justify-between rounded-lg border p-2 shadow-sm">
      <div>{bibliography.reference}</div>

      <RowWrapper>
        <Link href={ROUTES.PLANNING.BIBLIOGRAPHY.EDIT(bibliography.id!)}>
          <Button variant="outline">
            <Pencil /> Editar
          </Button>
        </Link>

        <Button
          variant="destructive"
          disabled={isLoading}
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </RowWrapper>
    </li>
  );
};

export default BibliographyListItem;
