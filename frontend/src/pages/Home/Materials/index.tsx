import { LucidePlus, StickyNote } from "lucide-react";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SContainer from "../../../components/common/wrapper/SContainer";

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
          <SigaFilledButton onClick={handleNewButtonClick}>
            <LucidePlus size={20} /> Novo
          </SigaFilledButton>
        </SigaTitleBar>

        <SListWrapper showCount>
          {items.map((item, index) => (
            <SListItem key={index}>
              <SContainer className="flex items-center gap-2 w-full">
                <StickyNote />
                <SContainer className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <span className="text-sm">{item.desc}</span>
                </SContainer>
              </SContainer>
            </SListItem>
          ))}
        </SListWrapper>
      </ContentWrapper>
    </>
  );
}

export default MaterialsPage;
