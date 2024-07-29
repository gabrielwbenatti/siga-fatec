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
      <div className="basis-full">
        <div className="space-y-4">
          <div>
            <h1>IRC100 - Laboratório de Redes</h1>
            <button>Novo Arquivo</button>
          </div>

          <div>
            {items.map((e) => (
              <SigaListItem>
                <span>+</span>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{e.title}</h3>
                  <span className="text-sm">{e.desc}</span>
                </div>
              </SigaListItem>
            ))}
          </div>

          <div>3 arquivos disponibilizados</div>
        </div>
      </div>
    </>
  );
}

export default MaterialsPage;
