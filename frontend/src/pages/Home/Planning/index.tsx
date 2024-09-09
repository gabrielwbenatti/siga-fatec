import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { LucidePlus } from "lucide-react";

function PlanningPage() {
  const items = [
    {
      data: "16/06/2024",
      title: "Introdução ao Conteúdo",
      desc: "Introdução ao conteúdo \nDefinição das ferramentas utilizadas",
    },
    {
      data: "16/06/2024",
      title: "Introdução ao Conteúdo",
      desc: "Introdução ao conteúdo \nDefinição das ferramentas utilizadas",
    },
    {
      data: "16/06/2024",
      title: "Introdução ao Conteúdo",
      desc: "Introdução ao conteúdo \nDefinição das ferramentas utilizadas",
    },
    {
      data: "16/06/2024",
      title: "Introdução ao Conteúdo",
      desc: "Introdução ao conteúdo \nDefinição das ferramentas utilizadas",
    },
  ];

  return (
    <>
      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes">
          <SigaFilledButton>
            <LucidePlus size={20} /> Novo
          </SigaFilledButton>
        </SigaTitleBar>

        <SListWrapper
          items={items}
          keyExtractor={(_, index) => index}
          showCount
          renderItem={(item) => (
            <SListItem>
              <div className="flex flex-col">
                <span className="text-sm">{item.data}</span>
                <h3 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h3>
                <span className="line-clamp-2">{item.desc}</span>
              </div>
            </SListItem>
          )}
        />
      </ContentWrapper>
    </>
  );
}

export default PlanningPage;
