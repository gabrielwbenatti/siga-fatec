import { useEffect, useState } from "react";
import { ClassPlanning } from "../../../types/ClassPlanning";
import { useNavigate, useParams } from "react-router-dom";
import {
  showClassPlanning,
  updateClassPlanning,
} from "../../../services/classes.planning.service";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import PlanningForm from "./components/PlanningForm";
import SigaTitleBar from "../../../components/common/SigaTitleBar";

export default function PlanningEditPage() {
  const [planning, setPlanning] = useState<ClassPlanning>({});

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (values: ClassPlanning) => {
    const response = await updateClassPlanning(values);

    if (response.status === 200) {
      navigate("/home/planning");
    }
  };

  useEffect(() => {
    const loadPlanning = async () => {
      const response = await showClassPlanning(+id!);
      setPlanning(response.data);
    };

    loadPlanning();
  }, []);

  return (
    <ContentWrapper>
      <SigaTitleBar title="Criar novo planejamento de aula" />

      <PlanningForm initialValue={planning} onSubmit={handleSubmit} />
    </ContentWrapper>
  );
}
