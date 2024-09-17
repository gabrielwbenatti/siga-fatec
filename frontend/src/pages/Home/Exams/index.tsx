import { LucidePlus } from "lucide-react";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import SListItem from "../../../components/common/SListItem";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getClassExams } from "../../../services/classes.exams.service";
import HomeTitleBarComp from "../components/HomeTitleBar";
import { getClassObj } from "../../../utils";

export default function ExamsPage() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const internalExams = async () => {
      const classObj = getClassObj();

      if (!classObj) return;

      const id = String(classObj.id);

      const response = await getClassExams(id);
      setExams(response.data);
    };

    internalExams();
  }, []);

  return (
    <>
      <ContentWrapper>
        <HomeTitleBarComp>
          <SigaFilledButton>
            <LucidePlus /> Novo
          </SigaFilledButton>
        </HomeTitleBarComp>

        {/* <SListWrapper
          items={ex}
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
        /> */}
      </ContentWrapper>
    </>
  );
}
