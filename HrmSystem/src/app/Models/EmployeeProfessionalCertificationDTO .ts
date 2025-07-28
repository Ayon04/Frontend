export interface EmployeeProfessionalCertificationDTO {
  idClient: number;
  id: number;
  idEmployee: number;
  certificationTitle: string;
  certificationInstitute: string;
  instituteLocation: string;
  fromDate: Date;
  toDate?: Date;
  setDate?: Date;
  createdBy?: string;
}
