import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaInput from "../../../components/common/SigaInput";
import SigaTextArea from "../../../components/common/SigaTextArea";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";

function PlanningCreatePage() {
  return (
    <ContentWrapper>
      <SigaTitleBar title="Criar novo planejamento de aula" />

      <form
        className="space-y-4"
        onSubmit={() => {
          console.log("submmit");
        }}
      >
        <div className="flex flex-col w-full">
          <span>Título da aula</span>
          <SigaInput autoComplete="false" className="w-full" />
        </div>

        <div className="flex flex-col w-full">
          <span>Descrição</span>
          <SigaTextArea className="w-full" />
        </div>

        <div className="flex w-full space-x-4">
          <div className="col-span-1 w-full">
            <span>Data planejada</span>
            <SigaInput type="date" className="w-full" />
          </div>{" "}
          <div className="col-span-1  w-full">
            <span>Data aplicada</span>
            <SigaInput type="date" className="w-full" />
          </div>
        </div>

        <SigaFilledButton type="button">Salvar</SigaFilledButton>
      </form>
    </ContentWrapper>
  );
}

export default PlanningCreatePage;
