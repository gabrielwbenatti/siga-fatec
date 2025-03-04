"use client";

import { Button } from "@/components/ui/button";
import api from "@/config/axiosInstance";
import { ROUTES } from "@/config/routes";
import ClassMaterial from "@/types/ClassMaterial";
import {
  ArrowDownUp,
  DownloadCloudIcon,
  FileText,
  Trash2,
  FileSpreadsheet,
  File,
  FileMinus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HomeMaterialsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [reordering, setReordering] = useState<boolean>(false);
  const [data, setData] = useState<ClassMaterial[] | null>(null);

  useEffect(() => {
    async function loadClassMaterialsData() {
      try {
        setLoading(true);
        const res = await api.get("/classes/materials");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadClassMaterialsData();
  }, []);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    if (!data) return;

    console.log(dragIndex);
    console.log(hoverIndex);

    const draggedItem = data[dragIndex];
    const newItems = [...data];

    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    newItems.map((e, i) => (e.list_index = i));

    setData(newItems);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/classes/materials/${id}`).then((res) => {
      if (res.status !== 200) return;

      toast.success("Item removido com sucesso");
    });

    const res = await api.get("/classes/materials");
    setData(res.data);
  };

  const handleDownload = () => {
    toast.info("Em breve");
  };

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

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <div className="flex gap-1.5">
          <Button
            variant="secondary"
            onClick={() => {
              toast.info("Em breve");
              // setReordering(!reordering);
            }}
          >
            <ArrowDownUp /> Reordenar
          </Button>

          <a href={ROUTES.MATERIALS.CREATE}>
            <Button>Novo</Button>
          </a>
        </div>
      </div>

      {data?.length === 0 ? (
        <div>Nenhuma informação para ser exibida.</div>
      ) : (
        <div className="flex flex-col divide-y">
          {reordering
            ? data?.map((e, i) => (
                <div
                  className="flex select-none items-center rounded-lg p-2"
                  key={i}
                >
                  {`(${e.list_index}) - ${e.title}`}
                </div>
              ))
            : data?.map((e, i) => (
                <div
                  className="flex items-center justify-between rounded-lg p-2 hover:bg-primary/10"
                  key={i}
                >
                  <div className="flex gap-1.5">
                    {getFileIcon(e.file_format!)}
                    <div className="flex flex-col gap-1.5">
                      <a
                        className="font-bold"
                        href={ROUTES.MATERIALS.EDIT(e.id!)}
                      >
                        {`${e.title} (${e.file_format})`}
                      </a>
                      {e.description && (
                        <span className="text-sm">{e.description}</span>
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
                      onClick={() => handleDelete(e.id!)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default HomeMaterialsPage;
