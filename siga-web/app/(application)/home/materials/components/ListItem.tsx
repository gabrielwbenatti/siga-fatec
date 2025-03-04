import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import {
  DownloadCloudIcon,
  File,
  FileMinus,
  FileSpreadsheet,
  FileText,
  Trash2,
} from "lucide-react";
import { FC } from "react";

interface HomeMaterialsListItemProps {
  material: ClassMaterial;
  onDelete?: (id: number) => void;
  onDownload?: (id: number) => void;
}

const HomeMaterialsListItem: FC<HomeMaterialsListItemProps> = ({
  material,
  onDelete,
  onDownload,
}: HomeMaterialsListItemProps) => {
  const getFileIcon = (extension: string) => {
    switch (extension) {
      case "doc":
      case "docx":
        return <FileText className="text-blue-400" />;
      case "xls":
      case "xlsx":
        return <FileSpreadsheet className="text-green-400" />;
      case "pdf":
        return <FileMinus className="text-red-400" />;
      default:
        return <File />;
    }
  };

  return (
    <div className="flex items-center justify-between rounded-lg p-2 hover:bg-primary/10">
      <div className="flex gap-1.5">
        {getFileIcon(material.file_format!)}
        <div className="flex flex-col gap-1.5">
          <a className="font-bold" href={ROUTES.MATERIALS.EDIT(material.id!)}>
            {`${material.title} (${material.file_format})`}
          </a>
          {material.description && (
            <span className="text-sm">{material.description}</span>
          )}
        </div>
      </div>

      <div className="flex gap-1.5">
        <Button variant="outline" onClick={() => onDownload?.(material.id!)}>
          <DownloadCloudIcon /> Download
        </Button>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete?.(material.id!)}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default HomeMaterialsListItem;
