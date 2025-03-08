"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
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
} from "lucide-react";
import { toast } from "sonner";

interface HomeMaterialsListItemProps {
  material: ClassMaterial;
  onDelete?: (id: number) => void;
  onDownload?: (id: number) => void;
}

export default function HomeMaterialsListItem({
  material,
}: HomeMaterialsListItemProps) {
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
      default:
        return <File />;
    }
  };

  function handleDownload() {
    console.log("handleDownload");
    toast.info("Em breve");
  }
  function handleDelete() {
    console.log("handleDelete");
    toast.info("Em breve ");
  }

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
        <Button variant="outline" onClick={() => handleDownload()}>
          <DownloadCloudIcon /> Download
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
}
