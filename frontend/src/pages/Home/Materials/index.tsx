import { StickyNote } from "lucide-react";
import SigaListItem from "../../../components/common/ListItem";
import SigaListWrapper from "../../../components/common/wrapper/ListWrapper";
import SigaButton from "../../../components/common/Button";
import SigaTitleBar from "../../../components/common/TitleBar";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/common/wrapper/ContentWrapper";

function MaterialsPage() {
  const items = [
    {
      title: "Apresencação da disciplina (PDF)",
      desc: "Apresentação da disciplina",
    },
    { title: "Template (DOCX)", desc: "Template do trabalho" },
    { title: "Revisão (PPTX)", desc: "Conteúdo para P1" },
  ];

  const navigate = useNavigate();

  const handleNewButtonClick = () => {
    navigate("/home/materials/create");
  };

  return (
    <>
      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes">
          <SigaButton onClick={handleNewButtonClick}>Novo Arquivo</SigaButton>
        </SigaTitleBar>
        <SigaListWrapper showCount>
          {items.map((item, index) => (
            <SigaListItem key={index}>
              <StickyNote />
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-sm">{item.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </SigaListWrapper>
      </ContentWrapper>
    </>
  );
}

export default MaterialsPage;
