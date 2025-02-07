import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { DownloadCloudIcon } from "lucide-react";

const HomeMaterialsPage = () => {
  const data = [
    {
      id: 1,
      title: "Modelo Trabalho",
      description: "Trabalho de graduação",
      file_format: "docx",
      file_url: "",
      list_index: 0,
    },
    {
      id: 2,
      title: "Conceitos Básicos",
      description: "",
      file_format: "pdf",
      file_url: "",
      list_index: 1,
    },
    {
      id: 3,
      title: "Reforço",
      description: "",
      file_format: "docx",
      file_url: "",
      list_index: 2,
    },
  ];

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Materiais de Aula</h1>
        <a href={ROUTES.MATERIALS.CREATE}>
          <Button>Novo</Button>
        </a>
      </div>

      <div className="flex flex-col divide-y">
        {data.map((e, i) => (
          <div
            className="flex items-center justify-between rounded-lg p-2 hover:bg-primary/10"
            key={i}
          >
            <div className="flex flex-col gap-1.5">
              <span>{e.title}</span>
              {e.description && (
                <span className="text-sm">{e.description}</span>
              )}
            </div>

            <Button variant="outline" size="icon">
              <DownloadCloudIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMaterialsPage;
