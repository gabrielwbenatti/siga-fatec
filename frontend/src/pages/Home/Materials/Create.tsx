import { useState } from "react";
import SigaTitleBar from "../../../components/common/SigaTitleBar";
import ContentWrapper from "../../../components/common/wrapper/SigaContentWrapper";
import SigaListWrapper from "../../../components/common/wrapper/SigaListWrapper";
import SigaListItem from "../../../components/common/SigaListItem";
import SigaButton from "../../../components/common/SigaButton";
import { useNavigate } from "react-router-dom";
import SigaDropzone from "../components/SigaDropzone";

function MaterialCreatePage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleSelectedFiles = (files: File[]) => {
    if (files) {
      setUploadedFiles(uploadedFiles.concat(files));
      setUploadedFiles(files);
    }
  };

  const handleOnClick = () => {
    navigate("/home/materials");
  };

  return (
    <>
      <SigaTitleBar title="Novo Material de Aula" />

      <ContentWrapper>
        <SigaDropzone onFilesSelected={handleSelectedFiles} />

        <SigaListWrapper>
          {uploadedFiles.map((file, index) => (
            <SigaListItem key={index}>
              <span className="select-none">{file.name}</span>
            </SigaListItem>
          ))}
        </SigaListWrapper>

        <SigaButton onClick={handleOnClick}>Salvar</SigaButton>
      </ContentWrapper>
    </>
  );
}

export default MaterialCreatePage;
