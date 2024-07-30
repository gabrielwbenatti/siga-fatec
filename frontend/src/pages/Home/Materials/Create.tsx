import { useFilePicker } from "use-file-picker";
import SigaInput from "../../../components/common/Input";
import SigaTitleBar from "../../../components/common/TitleBar";
import ContentWrapper from "../../../components/common/wrapper/ContentWrapper";
import { useState } from "react";

function MaterialCreatePage() {
  const { openFilePicker } = useFilePicker({
    multiple: false,
    accept: ["*"],
    onFilesSelected: ({ filesContent }) => {
      setFileName(filesContent);
    },
  });
  const [fileName, setFileName] = useState("c:\\");

  return (
    <>
      <SigaTitleBar title="Novo Material de Aula" />

      <ContentWrapper>
        <button onClick={() => openFilePicker()}>fiehf</button>
        <form action="post">
          <SigaInput
            label="Arquivo"
            className="w-full"
            readOnly
            value={fileName}
          />
        </form>
      </ContentWrapper>
    </>
  );
}

export default MaterialCreatePage;
