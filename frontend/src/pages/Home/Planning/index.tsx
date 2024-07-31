import SigaButton from "../../../components/common/SigaButton";
import SigaListItem from "../../../components/common/SigaListItem";
import SigaListWrapper from "../../../components/common/wrapper/SigaListWrapper";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";

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
          <SigaButton>Novo Planejamento</SigaButton>
        </SigaTitleBar>

        <SigaListWrapper showCount>
          {items.map((item, index) => (
            <SigaListItem key={index}>
              <div className="flex flex-col">
                <span className="text-sm">{item.data}</span>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span>{item.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </SigaListWrapper>
      </ContentWrapper>
    </>
  );
}

export default PlanningPage;
