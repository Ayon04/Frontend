import {EmployeeDocumentDTO} from './EmployeeDocumentDTO'
import {EmployeeEducationInfoDTO} from './EmployeeEducationInfoDTO'
import {EmployeeProfessionalCertificationDTO} from './EmployeeProfessionalCertificationDTO '
import {EmployeeFamilyInfoDTO} from './EmployeeFamilyInfoDTO '

// export interface EmployeeDTO {
//   idClient: number;
//   id: number;
//   employeeName: string;
//   employeeNameBangla?: string;
//   fatherName?: string;
//   motherName?: string;
//   idReportingManager?: number;
//   idJobType?: number;
//   idEmployeeType?: number;
//   birthDate?: Date;
//   joiningDate?: Date;
//   idGender?: number;
//   idReligion?: number;
//   idDepartment: number;
//   idSection: number;
//   idDesignation?: number;
//   hasOvertime?: boolean;
//   hasAttendenceBonus?: boolean;
//   idWeekOff?: number;
//   address?: string;
//   presentAddress?: string;
//   nationalIdentificationNumber?: string;
//   contactNo?: string;
//   idMaritalStatus?: number;
//   isActive?: boolean;
//   setDate?: Date;
//   createdBy?: string;
//   departmentName?: string;
//   designation?: string;

//   employeeDocuments: EmployeeDocumentDTO[];
//   employeeEducationInfos: EmployeeEducationInfoDTO[];
//   employeeProfessionalCertifications: EmployeeProfessionalCertificationDTO[];
//   employeeFamilyInfos: EmployeeFamilyInfoDTO[];

//   empImg?: File;
// }

export class EmployeeDTO {
  idClient: number;
  id: number;
  employeeName: string;
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
  
  employeeImage?: string;

  constructor(data: Partial<EmployeeDTO> = {}) {
    this.idClient = data.idClient ?? 0;
    this.id = data.id ?? 0;
    this.employeeName = data.employeeName ?? '';
    this.employeeNameBangla = data.employeeNameBangla;
    this.fatherName = data.fatherName;
    this.motherName = data.motherName;
    this.idReportingManager = data.idReportingManager;
    this.idJobType = data.idJobType;
    this.idEmployeeType = data.idEmployeeType;
    this.birthDate = data.birthDate ? new Date(data.birthDate) : undefined;
    this.joiningDate = data.joiningDate ? new Date(data.joiningDate) : undefined;
    this.idGender = data.idGender;
    this.idReligion = data.idReligion;
    this.idDepartment = data.idDepartment ?? 0;
    this.idSection = data.idSection ?? 0;
    this.idDesignation = data.idDesignation;
    this.hasOvertime = data.hasOvertime ?? false;
    this.hasAttendenceBonus = data.hasAttendenceBonus ?? false;
    this.idWeekOff = data.idWeekOff;
    this.address = data.address;
    this.presentAddress = data.presentAddress;
    this.nationalIdentificationNumber = data.nationalIdentificationNumber;
    this.contactNo = data.contactNo;
    this.idMaritalStatus = data.idMaritalStatus;
    this.isActive = data.isActive ?? true;
    this.setDate = data.setDate ? new Date(data.setDate) : undefined;
    this.createdBy = data.createdBy;
    this.departmentName = data.departmentName;
    this.designation = data.designation;

    this.employeeDocuments = data.employeeDocuments ?? [];
    this.employeeEducationInfos = data.employeeEducationInfos ?? [];
    this.employeeProfessionalCertifications = data.employeeProfessionalCertifications ?? [];
    this.employeeFamilyInfos = data.employeeFamilyInfos ?? [];

    this.employeeImage = data.employeeImage;
  }

  
}


