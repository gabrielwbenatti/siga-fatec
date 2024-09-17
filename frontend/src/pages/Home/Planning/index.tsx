import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { LucidePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { getClassesPlanning } from "../../../services/classes.planning.service";
import { useNavigate } from "react-router-dom";
import { ClassPlanning } from "../../../types/ClassPlanning";
import toast, { Toaster } from "react-hot-toast";

function PlanningPage() {
  const [planning, setPlanning] = useState<ClassPlanning[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPlanning = async () => {
      const classStorage = localStorage.getItem("class-info");

      if (!classStorage) {
        toast.error("Class undefined, try again");
        return;
      }

      const classObj = JSON.parse(classStorage);
      const id = String(classObj.id);

      const response = await getClassesPlanning(id);
      setPlanning(response.data);
    };

    loadPlanning();
  }, []);

  return (
    <>
      <Toaster />

      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes">
          <SigaFilledButton onClick={() => navigate("/home/planning/create")}>
            <LucidePlus size={20} /> Novo
          </SigaFilledButton>
        </SigaTitleBar>

        <SListWrapper
          items={planning}
          keyExtractor={(_, index) => index}
          showCount
          renderItem={(item) => (
            <SListItem>
              <div className="flex flex-col">
                {item.applied_date && (
                  <span className="text-sm">
                    {new Date(item.applied_date).toLocaleDateString()}
                  </span>
                )}
                <h3 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h3>
                {item.description && (
                  <span className="line-clamp-2">{item.description}</span>
                )}
              </div>
            </SListItem>
          )}
        />
      </ContentWrapper>
    </>
  );
}

export default PlanningPage;
