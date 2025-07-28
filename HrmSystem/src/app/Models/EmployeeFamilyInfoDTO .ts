export interface EmployeeFamilyInfoDTO {
  idClient: number;
  id: number;
  idEmployee: number;
  name: string;
  idGender: number;
  idRelationship: number;
  dateOfBirth?: Date;
  contactNo?: string;
  currentAddress?: string;
  permanentAddress?: string;
  setDate?: Date;
  createdBy?: string;
}
