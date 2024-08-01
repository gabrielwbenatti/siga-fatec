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

        {isEditing ? (
          <>
            <SListWrapper>
              {uploadedFiles.map((file, index) => (
                <li key={index}>
                  <SContainer className="flex items-center gap-2 w-full px-4 py-2 ">
                    <StickyNote />
                    <SContainer className="flex flex-col w-full">
                      <h3 className="font-semibold text-lg">{file.name}</h3>

                      <SigaInput
                        className="w-full"
                        value={file.description}
                        onChange={(event) => {
                          file.description = event.currentTarget.value;
                        }}
                      />
                    </SContainer>
                  </SContainer>
                </li>
              ))}
            </SListWrapper>

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
        ) : (
          <>
            <SListWrapper>
              {uploadedFiles.map((item, index) => (
                <SListItem key={index}>
                  <SContainer className="flex items-center gap-2 w-full">
                    <StickyNote />
                    <SContainer className="flex flex-col w-full">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span>{item.description}</span>
                    </SContainer>
                  </SContainer>
                </SListItem>
              ))}
            </SListWrapper>
          </>
        )}
      </ContentWrapper>
    </>
  );
}

export default MaterialsPage;
