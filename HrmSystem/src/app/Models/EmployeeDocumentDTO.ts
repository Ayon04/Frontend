export interface EmployeeDocumentDTO {
  idClient: number;
  id: number;
  idEmployee: number;
  documentName: string;
  fileName: string;
  uploadedFileExtention?: string;
  uploadDate: Date;
  setDate?: Date;
  createdBy?: string;
  uploadedFile?: string; // For file upload in Angular
}
