"use client";

import { useState } from "react";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/extension/file-upload";
import { Paperclip } from "lucide-react";
import { Button } from "../ui/button";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold text-xl">
          Choose a file or drag & drop it here
        </span>
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        JPEG, PNG, PDG, and MP4 formats, up to 50MB
      </p>
      <Button variant="outline" className="rounded-md px-4 my-3 ">
        Browse File
      </Button>
    </>
  );
};

interface FileUploaderTestProps {
  onFilesChange: (files: File[] | null) => void;
}

const FileUploaderTest: React.FC<FileUploaderTestProps> = ({ onFilesChange }) => {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const handleFilesChange = (newFiles: File[] | null) => {
    setFiles(newFiles);
    onFilesChange(newFiles);
  };

  return (
    <FileUploader
      value={files}
      onValueChange={(files)=> handleFilesChange(files)}
      dropzoneOptions={dropZoneConfig}
      className="relative bg-background rounded-lg pr-2 py-2"
    >
      <FileInput className="outline-dashed outline-1 outline-white">
        <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full border-4 max-w-screen-sm h-[250px] border-dashed border-gray-500">
          <FileSvgDraw />
        </div>
      </FileInput>
      <FileUploaderContent>
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploaderItem key={i} index={i}>
              <Paperclip className="h-4 w-4 stroke-current" />
              <span>{file.name}</span>
            </FileUploaderItem>
          ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploaderTest;
