import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { LucidePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { getClassesPlanning } from "../../../services/classes.planning.service";
import { useNavigate } from "react-router-dom";
import { ClassPlanning } from "../../../types/ClassPlanning";
import { Toaster } from "react-hot-toast";
import HomeTitleBarComp from "../components/HomeTitleBar";
import { getClassObj } from "../../../utils";

function PlanningPage() {
  const [planning, setPlanning] = useState<ClassPlanning[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPlanning = async () => {
      const classObj = getClassObj();

      if (!classObj) return;

      const response = await getClassesPlanning(classObj.id);
      setPlanning(response.data);
    };

    loadPlanning();
  }, []);

  const handleSelect = (id: number) => {
    navigate(`/home/planning/edit/${id}`);
  };

  return (
    <>
      <Toaster />

      <ContentWrapper>
        <HomeTitleBarComp>
          <SigaFilledButton onClick={() => navigate("/home/planning/create")}>
            <LucidePlus size={20} /> Novo
          </SigaFilledButton>
        </HomeTitleBarComp>

        <SListWrapper
          items={planning}
          keyExtractor={(_, index) => index}
          showCount
          renderItem={(item) => (
            <SListItem>
              <div
                className="flex flex-col"
                onClick={() => handleSelect(item.id!)}
              >
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
