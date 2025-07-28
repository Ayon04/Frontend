export interface EmployeeEducationInfoDTO {
  idClient: number;
  id: number;
  idEmployee: number;
  idEducationLevel: number;
  idEducationExamination: number;
  idEducationResult: number;
  cgpa?: number;
  examScale?: number;
  marks?: number;
  major: string;
  passingYear: number;
  instituteName: string;
  isForeignInstitute: boolean;
  duration?: number;
  achievement?: string;
  setDate?: Date;
  createdBy?: string;
  educationLevelName?: string;
  examinationName?: string;
  resultName?: string;
}
