import { StickyNote } from "lucide-react";
import SigaListItem from "../../../components/common/ListItem";

function MaterialsPage() {
  const items = [
    {
      title: "Apresencação da disciplina (PDF)",
      desc: "Apresentação da disciplina",
    },
    { title: "Template (DOCX)", desc: "Template do trabalho" },
    { title: "Revisão (PPTX)", desc: "Conteúdo para P1" },
  ];

  return (
    <>
      <div className="space-y-4 ">
        <div className="flex justify-between">
          <h1>IRC100 - Laboratório de Redes</h1>
          <button>Novo Arquivo</button>
        </div>

        <div className="bg-clip-border rounded-lg ">
          {items.map((item) => (
            <SigaListItem>
              <StickyNote />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-sm">{item.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </div>

        <div>3 arquivos disponibilizados</div>
      </div>
    </>
  );
}

export default MaterialsPage;
