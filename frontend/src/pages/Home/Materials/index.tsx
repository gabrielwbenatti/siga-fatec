import { Pencil, SaveAll } from "lucide-react";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SContainer from "../../../components/common/wrapper/SContainer";
import { useState } from "react";
import SigaTextButton from "../../../components/common/SigaTextButton";
import EditMaterialsPage from "./EditMaterialsPage";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";

function MaterialsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleNewButtonClick = () => setIsEditing(false);
  const handleCancelClick = () => setIsEditing(false);
  const handleEditButtonClick = () => setIsEditing(true);

  const handleFilesSelected = (files: File[]) => setUploadedFiles(files);

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
              files={uploadedFiles}
              onFilesSelected={handleFilesSelected}
            />
          </>
        ) : (
          <SListWrapper
            items={uploadedFiles}
            keyExtractor={(item) => item.name}
            showCount
            renderItem={(item) => (
              <div className="py-2 px-4 flex flex-col">
                <span className="text-md ">{item.name}</span>
                <span className="text-sm ">{item.type}</span>
              </div>
            )}
          />
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
