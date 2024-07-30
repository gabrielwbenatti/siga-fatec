import SigaButton from "../../../components/common/Button";
import SigaListItem from "../../../components/common/ListItem";
import SigaListWrapper from "../../../components/common/ListWrapper";
import SigaTitleBar from "../components/TitleBar";

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
      <div className="space-y-4">
        <SigaTitleBar>
          <h1 className="text-lg font-bold">IRC100 - Laboratório de Redes</h1>
          <SigaButton>Novo Planejamento</SigaButton>
        </SigaTitleBar>

        <SigaListWrapper showCount>
          {items.map((item) => (
            <SigaListItem>
              <div className="flex flex-col">
                <span className="text-sm">{item.data}</span>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span>{item.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </SigaListWrapper>
      </div>
    </>
  );
}

export default PlanningPage;
