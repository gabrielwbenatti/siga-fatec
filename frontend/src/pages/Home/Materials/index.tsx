import { StickyNote } from "lucide-react";
import SigaListItem from "../../../components/common/ListItem";
import SigaListWrapper from "../../../components/common/ListWrapper";
import SigaButton from "../../../components/common/Button";
import SigaTitleBar from "../components/TitleBar";

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
        <SigaTitleBar>
          <h1 className="text-lg font-bold">IRC100 - Laboratório de Redes</h1>
          <SigaButton>Novo Arquivo</SigaButton>
        </SigaTitleBar>

        <SigaListWrapper showCount>
          {items.map((item) => (
            <SigaListItem>
              <StickyNote />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-sm">{item.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </SigaListWrapper>
      </div>
    </>
  );
}

export default MaterialsPage;
