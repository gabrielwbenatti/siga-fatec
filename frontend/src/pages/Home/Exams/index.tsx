import SigaTitleBar from "../../../components/common/SigaTitleBar";
import SListItem from "../../../components/common/SListItem";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";

export default function ExamsPage() {
  const items: { title: string; date: Date; description?: string }[] = [
    {
      title: "P1",
      date: new Date("2024-09-30"),
      description: "Avaliação 1",
    },
    {
      title: "T1",
      date: new Date("2024-10-31"),
      description: "Trabalho em grupo",
    },
    {
      title: "P2",
      date: new Date("2024-12-31"),
      description: "Avaliação 2",
    },
  ];

  return (
    <>
      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes" />

        <SListWrapper
          items={items}
          keyExtractor={(_, index) => index}
          showCount
          renderItem={(item: any) => (
            <SListItem className="flex flex-col gap-1">
              <span className="font-medium">
                {item.title} - {new Date(item.date).toLocaleDateString("pt-BR")}
              </span>

              {item.description && <span>{item.description}</span>}
            </SListItem>
          )}
          onItemClick={(item) => console.log(item.title)}
        />
      </ContentWrapper>
    </>
  );
}
