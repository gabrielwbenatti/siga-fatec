import { useState } from "react";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { ClassPlanning } from "../../../types/ClassPlanning";
import PlanningForm from "./components/PlanningForm";
import { getClassObj } from "../../../utils";
import { storeClassPlanning } from "../../../services/classes.planning.service";
import { useNavigate } from "react-router-dom";

function PlanningCreatePage() {
  const [planning, setPlanning] = useState<ClassPlanning>({});
  const navigate = useNavigate();

  const handleSubmit = async (value: ClassPlanning) => {
    const classObj = getClassObj();

    if (!classObj) return;

    value.class_id = classObj.id;
    setPlanning(value);

    const response = await storeClassPlanning(value);
    if (response.status === 201) {
      navigate("/home/planning");
    }
  };

  return (
    <ContentWrapper>
      <SigaTitleBar title="Criar novo planejamento de aula" />
      <PlanningForm initialValue={planning} onSubmit={handleSubmit} />
    </ContentWrapper>
  );
}

export default PlanningCreatePage;
