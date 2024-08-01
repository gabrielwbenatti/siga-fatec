import { Upload } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

interface SigaDropzoneProps {
  paragraphText?: string;
  onFilesSelected: (files: File[]) => void;
}

function SigaDropzone({ paragraphText, onFilesSelected }: SigaDropzoneProps) {
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop(acceptedFiles: File[]) {
      let newFiles = files.concat(acceptedFiles);
      setFiles(newFiles);
      onFilesSelected(newFiles);
    },
  });

  return (
    <>
      <div className="flex flex-col">
        {paragraphText && <p className="mb-4">{paragraphText}</p>}

        <div
          {...getRootProps()}
          className="w-full h-40 bg-light-surfaceContainer rounded-lg border-2 border-light-primary border-dashed"
        >
          <div className="flex flex-col justify-center h-full items-center select-none cursor-pointer">
            <input {...getInputProps()} />
            <Upload />
            <p>Clique ou arraste</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigaDropzone;
