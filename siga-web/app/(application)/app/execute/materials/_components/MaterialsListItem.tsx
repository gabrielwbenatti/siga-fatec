"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import ClassMaterial from "@/types/ClassMaterial";
import {
  DownloadCloudIcon,
  File,
  FileImage,
  FileMinus,
  FileSpreadsheet,
  FileText,
  FileChartPieIcon,
  Trash2,
  FileCode2,
} from "lucide-react";
import { FC } from "react";
import { toast } from "sonner";

interface MaterialsListItemProps {
  material: ClassMaterial;
  onDelete?: (id: number) => void;
  onDownload?: (id: number) => void;
}

const MaterialsListItem: FC<MaterialsListItemProps> = ({
  material,
}: MaterialsListItemProps) => {
  const getFileIcon = (extension: string) => {
    switch (extension) {
      case "doc":
      case "docx":
        return <FileText className="text-blue-400" />;
      case "xls":
      case "xlsx":
        return <FileSpreadsheet className="text-green-400" />;
      case "pptx":
      case "ppt":
        return <FileChartPieIcon className="text-orange-400" />;
      case "pdf":
        return <FileMinus className="text-red-400" />;
      case "png":
      case "jpg":
      case "jpeg":
      case "bmp":
        return <FileImage className="text-cyan-400" />;
      case "json":
      case "xml":
      case "js":
      case "ts":
        return <FileCode2 />;
      default:
        return <File />;
    }
  };

  function handleDownload() {
    toast.info("Em breve");
  }
  function handleDelete() {
    toast.info("Em breve ");
  }

  return (
    <div className="flex items-center justify-between rounded-lg border p-2 shadow-sm hover:bg-primary/10">
      <div className="flex gap-1.5">
        {getFileIcon(material.file_format!)}
        <div className="flex flex-col gap-1.5">
          <a
            className="line-clamp-2 overflow-ellipsis font-bold"
            href={ROUTES.EXECUTE.MATERIALS.EDIT(material.id!)}
          >
            {`${material.title} (${material.file_format})`}
          </a>
          {material.description && (
            <span className="text-sm">{material.description}</span>
          )}
        </div>
      </div>

      <div className="flex gap-1.5">
        <Button variant="outline" onClick={() => handleDownload()}>
          <DownloadCloudIcon />
          <span className="hidden md:block">Download</span>
        </Button>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => handleDelete()}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default MaterialsListItem;
