import { DragEvent, ChangeEvent } from 'react';

export interface FileUploadBoxProps {
  onFileUpload: (file: File) => void;
}

export type DragEventHandler = (e: DragEvent<HTMLDivElement>) => void;
export type DropEventHandler = (e: DragEvent<HTMLDivElement>) => void;
export type ChangeInputEventHandler = (
  e: ChangeEvent<HTMLInputElement>,
) => void;
