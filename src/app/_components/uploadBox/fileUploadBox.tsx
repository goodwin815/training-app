'use client';

import { useState, DragEvent, ChangeEvent } from 'react';
import UploadIcon from '../icons/upload';
import Button from '../Button/button';
import SearchIcon from '../icons/search';

interface FileUploadBoxProps {}

const FileUploadBox: React.FC<FileUploadBoxProps> = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  return (
    <div
      className={`flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-[87px]  border-2 border-dashed bg-gray-50 ${
        isDragging ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <UploadIcon />
        <input type="file" className="hidden" />
        <p className="text-gray-500">
          <span className="text-black">Click to upload</span> or drag and drop
        </p>
        <p className="text-gray-500">Any type of Image file</p>
        <Button border simple>
          <SearchIcon />
          <h3 className="ml-1 text-[#1A56DB]">Browse File</h3>
        </Button>
      </div>
    </div>
  );
};

export default FileUploadBox;
