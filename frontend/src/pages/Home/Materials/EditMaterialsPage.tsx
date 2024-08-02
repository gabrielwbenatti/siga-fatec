import { useEffect, useState } from "react";
import SigaDropzone from "../components/SigaDropzone";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaInput from "../../../components/common/SigaInput";

interface EditMaterialsPageProps {
  files: File[];
  onFilesSelected: (files: File[]) => void;
}

function EditMaterialsPage({ ...props }: EditMaterialsPageProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    setUploadedFiles(props.files);
  }, []);

  const handleFilesSelected = (acceptedFiles: File[]): void => {
    const newFiles = uploadedFiles.concat(acceptedFiles);
    setUploadedFiles(newFiles);
    props.onFilesSelected(newFiles);
  };

  return (
    <>
      <SListWrapper
        items={uploadedFiles}
        renderItem={(item) => (
          <div className="py-2 px-4 flex flex-col w-full">
            <span>{item.name}</span>
            <SigaInput className="w-full " />
          </div>
        )}
        keyExtractor={(item) => item.name}
      />

      <SigaDropzone onFilesSelected={handleFilesSelected} />
    </>
  );
}

export default EditMaterialsPage;
