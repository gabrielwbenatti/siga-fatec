import { useState } from "react";
import SigaTitleBar from "../../../components/common/TitleBar";
import ContentWrapper from "../../../components/common/wrapper/ContentWrapper";
import SigaListWrapper from "../../../components/common/wrapper/ListWrapper";
import SigaListItem from "../../../components/common/ListItem";
import SigaButton from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";
import SigaDropzone from "../components/Dropzone";

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
