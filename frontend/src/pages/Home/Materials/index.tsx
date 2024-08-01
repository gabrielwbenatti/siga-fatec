import { Pencil, SaveAll, StickyNote } from "lucide-react";
import SListItem from "../../../components/common/SListItem";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SContainer from "../../../components/common/wrapper/SContainer";
import { useState } from "react";
import SigaTextButton from "../../../components/common/SigaTextButton";
import SigaDropzone from "../components/SigaDropzone";
import { ClassMaterial } from "../../../types/ClassMaterial";
import SigaInput from "../../../components/common/SigaInput";

function MaterialsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<ClassMaterial[]>([]);

  const handleNewButtonClick = () => {
    setIsEditing(false);
  };
  const handleCancelClick = () => setIsEditing(false);
  const handleEditButtonClick = () => setIsEditing(true);

  const handleSelectedFiles = (files: File[]) => {
    if (files) {
      setUploadedFiles(files);
    }
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

        <SListWrapper showCount>
          {uploadedFiles.map((file, index) => (
            <SListItem key={index}>
              <SContainer className="flex items-center gap-2 w-full">
                <StickyNote />
                <SContainer className="flex flex-col w-full">
                  <h3 className="font-semibold text-lg">{file.name}</h3>
                  {isEditing ? (
                    <SigaInput
                      className="w-full"
                      value={file.description}
                      onChange={(event) => {
                        file.description = event.currentTarget.value;
                      }}
                    />
                  ) : (
                    <span>{file.description}</span>
                  )}
                </SContainer>
              </SContainer>
            </SListItem>
          ))}
        </SListWrapper>

        {isEditing && (
          <>
            <SigaDropzone onFilesSelected={handleSelectedFiles} />

            <SContainer className="flex flex-row gap-2 ">
              <SigaFilledButton onClick={handleNewButtonClick}>
                <SaveAll size={20} /> Salvar
              </SigaFilledButton>

              <SigaTextButton onClick={handleCancelClick}>
                Cancelar
              </SigaTextButton>
            </SContainer>
          </>
        )}
      </ContentWrapper>
    </>
  );
}

export default MaterialsPage;
