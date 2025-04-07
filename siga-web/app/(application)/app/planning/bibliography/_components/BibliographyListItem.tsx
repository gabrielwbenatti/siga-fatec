import RowWrapper from "@/components/SiGA/RowWrapper";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ClassBibliography from "@/types/ClassBibliography";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface Props {
  bibliography: ClassBibliography;
}

const BibliographyListItem = ({ bibliography }: Props) => {
  return (
    <li className="flex items-center justify-between rounded-lg border p-2 shadow-sm">
      <div>{bibliography.reference}</div>

      <RowWrapper>
        <Link href={ROUTES.PLANNING.BIBLIOGRAPHY.EDIT(bibliography.id!)}>
          <Button variant="outline">
            <Pencil /> Editar
          </Button>
        </Link>

        <Button variant="destructive">
          <Trash2 />
        </Button>
      </RowWrapper>
    </li>
  );
};

export default BibliographyListItem;
