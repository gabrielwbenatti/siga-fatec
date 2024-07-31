import { useState } from "react";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SListItem from "../../../components/common/SListItem";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import { useNavigate } from "react-router-dom";
import SigaDropzone from "../components/SigaDropzone";
import { SaveAll } from "lucide-react";
import SContainer from "../../../components/common/wrapper/SContainer";
import SigaTextButton from "../../../components/common/SigaTextButton";

function MaterialCreatePage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleSelectedFiles = (files: File[]) => {
    if (files) {
      setUploadedFiles(uploadedFiles.concat(files));
      setUploadedFiles(files);
    }
  };

  const handleSaveClick = () => {
    navigate("/home/materials");
  };
  const handleCancelClick = () => {
    navigate("/home/materials");
  };

  return (
    <>
      <SigaTitleBar title="Novo Material de Aula" />

      <ContentWrapper>
        <SigaDropzone onFilesSelected={handleSelectedFiles} />

        {uploadedFiles.length > 0 && (
          <SListWrapper>
            {uploadedFiles.map((file, index) => (
              <SListItem key={index}>
                <span className="select-none">{file.name}</span>
              </SListItem>
            ))}
          </SListWrapper>
        )}

        <SContainer className="flex w-full ">
          <SigaFilledButton onClick={handleSaveClick}>
            <SaveAll size={20} /> Salvar
          </SigaFilledButton>

          <SigaTextButton onClick={handleCancelClick}>Cancelar</SigaTextButton>
        </SContainer>
      </ContentWrapper>
    </>
  );
}

export default MaterialCreatePage;
