import { useState } from "react";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SigaListWrapper from "../../../components/common/wrapper/SigaListWrapper";
import SigaListItem from "../../../components/common/SigaListItem";
import SigaFilledButton from "../../../components/common/SigaFilledButton";
import { useNavigate } from "react-router-dom";
import SigaDropzone from "../components/SigaDropzone";
import { SaveAll } from "lucide-react";
import SigaWrapper from "../../../components/common/wrapper/SigaWrapper";
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
          <SigaListWrapper>
            {uploadedFiles.map((file, index) => (
              <SigaListItem key={index}>
                <span className="select-none">{file.name}</span>
              </SigaListItem>
            ))}
          </SigaListWrapper>
        )}

        <SigaWrapper className="flex w-full ">
          <SigaFilledButton onClick={handleSaveClick}>
            <SaveAll size={20} /> Salvar
          </SigaFilledButton>

          <SigaTextButton onClick={handleCancelClick}>Cancelar</SigaTextButton>
        </SigaWrapper>
      </ContentWrapper>
    </>
  );
}

export default MaterialCreatePage;
