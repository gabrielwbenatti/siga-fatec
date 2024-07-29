import SigaListItem from "../../../components/common/ListItem";

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
  ];

  return (
    <>
      <div className="space-y-4">
        <div>
          <h1>IRC100 - Laboratório de Redes</h1>
          <button>Novo Arquivo</button>
        </div>

        <div>
          {items.map((e) => (
            <SigaListItem>
              <div className="flex flex-col">
                <span className="text-sm">{e.data}</span>
                <h3 className="font-semibold text-lg">{e.title}</h3>
                <span>{e.desc}</span>
              </div>
            </SigaListItem>
          ))}
        </div>

        <div>3 arquivos disponibilizados</div>
      </div>
    </>
  );
}

export default PlanningPage;
