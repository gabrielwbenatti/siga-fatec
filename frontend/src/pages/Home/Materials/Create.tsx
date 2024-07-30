import { useState } from "react";
import SigaTitleBar from "../../../components/common/TitleBar";
import ContentWrapper from "../../../components/common/wrapper/ContentWrapper";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import SigaListWrapper from "../../../components/common/wrapper/ListWrapper";
import SigaListItem from "../../../components/common/ListItem";
import SigaButton from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

function MaterialCreatePage() {
  const [files, setFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles) setFiles(files.concat(acceptedFiles));
    },
  });

  const handleOnClick = () => {
    navigate("/home/materials");
  };

  return (
    <>
      <SigaTitleBar title="Novo Material de Aula" />

      <ContentWrapper>
        <p>
          Clique no espaço abaixo ou arraste os arquivos para realizar o upload
        </p>

        <div
          {...getRootProps({
            className:
              "w-full h-40 bg-light-surfaceContainer rounded-lg border-2 border-light-primary border-dashed",
          })}
        >
          <div className="flex flex-col justify-center h-full items-center select-none cursor-pointer">
            <input {...getInputProps()} />
            <Upload />
            <p>Clique ou arraste</p>
          </div>
        </div>

        <SigaListWrapper>
          {files.map((file, index) => (
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
