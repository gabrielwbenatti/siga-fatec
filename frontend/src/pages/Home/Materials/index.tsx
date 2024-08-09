import { Pencil, SaveAll } from "lucide-react";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SContainer from "../../../components/common/wrapper/SContainer";
import { useState } from "react";
import SigaTextButton from "../../../components/common/SigaTextButton";
import EditMaterialsPage from "./EditMaterialsPage";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import { ClassMaterial } from "../../../types/ClassMaterial";

function MaterialsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [materials, setMaterials] = useState<ClassMaterial[]>([]);

  const handleNewButtonClick = () => setIsEditing(false);
  const handleCancelClick = () => setIsEditing(false);
  const handleEditButtonClick = () => setIsEditing(true);

  const handleFilesSelected = (materials: ClassMaterial[]) => {
    setMaterials(materials);
  };

  return (
    <>
      <ContentWrapper>
        <SigaTitleBar title="IRC100 - Laboratório de Redes">
          {!isEditing && (
            <>
              <SigaFilledButton onClick={handleEditButtonClick}>
                <Pencil size={20} /> Editar
              </SigaFilledButton>
            </>
          )}
        </SigaTitleBar>

        {isEditing ? (
          <>
            <EditMaterialsPage
              materials={materials}
              onFilesSelected={handleFilesSelected}
            />
          </>
        ) : (
          materials.length > 0 && (
            <SListWrapper
              items={materials}
              keyExtractor={(_, index) => index}
              showCount
              renderItem={(item) => (
                <div className="py-2 px-4 flex flex-col">
                  <span className="text-md ">{item.name}</span>
                  <span className="text-sm ">{item.description}</span>
                </div>
              )}
            />
          )
        )}

        {isEditing && (
          <SContainer className="flex flex-row gap-2 ">
            <SigaFilledButton onClick={handleNewButtonClick}>
              <SaveAll size={20} /> Salvar
            </SigaFilledButton>

            <SigaTextButton onClick={handleCancelClick}>
              Cancelar
            </SigaTextButton>
          </SContainer>
        )}
      </ContentWrapper>
    </>
  );
}

export default MaterialsPage;
