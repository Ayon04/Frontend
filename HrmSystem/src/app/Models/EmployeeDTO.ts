import {EmployeeDocumentDTO} from './EmployeeDocumentDTO'
import {EmployeeEducationInfoDTO} from './EmployeeEducationInfoDTO'
import {EmployeeProfessionalCertificationDTO} from './EmployeeProfessionalCertificationDTO '
import {EmployeeFamilyInfoDTO} from './EmployeeFamilyInfoDTO '

export interface EmployeeDTO {
  idClient: number;
  id: number;
  employeeName?: string;
  employeeNameBangla?: string;
  fatherName?: string;
  motherName?: string;
  idReportingManager?: number;
  idJobType?: number;
  idEmployeeType?: number;
  birthDate?: Date;
  joiningDate?: Date;
  idGender?: number;
  idReligion?: number;
  idDepartment: number;
  idSection: number;
  idDesignation?: number;
  hasOvertime?: boolean;
  hasAttendenceBonus?: boolean;
  idWeekOff?: number;
  address?: string;
  presentAddress?: string;
  nationalIdentificationNumber?: string;
  contactNo?: string;
  idMaritalStatus?: number;
  isActive?: boolean;
  setDate?: Date;
  createdBy?: string;
  departmentName?: string;
  designation?: string;

  employeeDocuments: EmployeeDocumentDTO[];
  employeeEducationInfos: EmployeeEducationInfoDTO[];
  employeeProfessionalCertifications: EmployeeProfessionalCertificationDTO[];
  employeeFamilyInfos: EmployeeFamilyInfoDTO[];

  empImg?: File;
}
