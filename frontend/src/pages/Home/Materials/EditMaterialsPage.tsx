import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SigaDropzone from "../components/SigaDropzone";
import SListWrapper from "../../../components/common/wrapper/SListWrapper";
import SigaInput from "../../../components/common/SigaInput";
import { ClassMaterial } from "../../../types/ClassMaterial";
import { useState } from "react";

interface EditMaterialsPageProps {
  materials: ClassMaterial[];
  onFilesSelected: (files: ClassMaterial[]) => void;
}

function EditMaterialsPage({ ...props }: EditMaterialsPageProps) {
  const [uploadedFiles, setUploadedFiles] = useState<ClassMaterial[]>(
    props.materials
  );

  const handleFilesSelected = (acceptedFiles: File[]): void => {
    const newFiles = [...uploadedFiles];

    acceptedFiles.map((accepted) => {
      if (!props.materials.find((file) => file.name === accepted.name)) {
        newFiles.push(accepted);
      }
    });

    setUploadedFiles(newFiles);
    props.onFilesSelected(newFiles);
  };

  return (
    <>
      <SListWrapper
        items={uploadedFiles}
        renderItem={(item) => (
          <div className="py-2 px-4 flex flex-col w-full">
            <span className="mb-1">{item.name}</span>
            <SigaInput
              className="w-full "
              value={item.description}
              onChange={(e) => (item.description = e.currentTarget.value)}
            />
          </div>
        )}
        keyExtractor={(_, index) => index}
      />

      <SigaDropzone onFilesSelected={handleFilesSelected} />
    </>
  );
}

export default EditMaterialsPage;
