import { useState } from "react";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaInput from "../../../components/common/SigaInput";
import SigaTextArea from "../../../components/common/SigaTextArea";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { ClassPlanning } from "../../../types/ClassPlanning";
import toast from "react-hot-toast";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

function PlanningCreatePage() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [appliedDate, setAppliedDate] = useState<string>("");
  const [plannedDate, setPlannedDate] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    const classStorage = localStorage.getItem("class-info");

    if (!classStorage) {
      toast.error("Class undefined, try again");
      return;
    }

    const classObj = JSON.parse(classStorage);
    const id = classObj.id;

    const planning: ClassPlanning = {
      class_id: id,
      title: title,
      description: description,
      planned_date: new Date(plannedDate),
      applied_date: appliedDate ? new Date(appliedDate) : undefined,
    };

    await api.post("/classes/planning", planning).then((res) => {
      if (res.status === 201) {
        navigate("/home/planning");
      }
    });
  };

  return (
    <ContentWrapper>
      <SigaTitleBar title="Criar novo planejamento de aula" />

      <form className="space-y-4">
        <div className="flex flex-col w-full">
          <span>Título da aula</span>
          <SigaInput
            autoComplete="false"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <span>Descrição</span>
          <SigaTextArea
            className="w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex w-full space-x-4">
          <div className="col-span-1 w-full">
            <span>Data planejada</span>
            <SigaInput
              type="date"
              className="w-full"
              value={plannedDate}
              onChange={(e) => setPlannedDate(e.target.value)}
            />
          </div>
          <div className="col-span-1  w-full">
            <span>Data aplicada</span>
            <SigaInput
              type="date"
              className="w-full"
              value={appliedDate}
              onChange={(e) => setAppliedDate(e.target.value)}
            />
          </div>
        </div>

        <SigaFilledButton type="button" onClick={onSubmit}>
          Salvar
        </SigaFilledButton>
      </form>
    </ContentWrapper>
  );
}

export default PlanningCreatePage;
