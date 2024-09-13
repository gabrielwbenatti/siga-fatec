import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import { LucidePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { getClassesPlanning } from "../../../services/classes.planning.service";
import { useNavigate } from "react-router-dom";

function PlanningPage() {
  const [planning, setPlanning] = useState<any[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const loadPlanning = async () => {
      try {
        const teacherId = localStorage.getItem("teacher-id");

        if (teacherId) {
          const res = await getClassesPlanning(+teacherId);
          setPlanning(res.data);
        }
      } catch (e) {
        console.error("err", e);
      }
    };

    loadPlanning();
  }, []);

  return (
    <>
      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes">
          <SigaFilledButton onClick={() => nav("/home/planning/create")}>
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
                <span className="line-clamp-2">{item.desc}</span>
              </div>
            </SListItem>
          )}
        />
      </ContentWrapper>
    </>
  );
}

export default PlanningPage;
