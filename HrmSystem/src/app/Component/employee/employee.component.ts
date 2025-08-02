import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../../Models/EmployeeDTO';
import { EmployeeService } from '../../Services/employee.service';
import { DropDownService } from '../../Services/dropDown.service';
import { RouterModule } from '@angular/router';
import { FormArray, FormBuilder,FormControl,FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DropDown } from '../../Models/DropDown';
import { EmployeeDocumentDTO } from '../../Models/EmployeeDocumentDTO';
import { EmployeeEducationInfoDTO } from '../../Models/EmployeeEducationInfoDTO';
import { EmployeeFamilyInfoDTO } from '../../Models/EmployeeFamilyInfoDTO ';
import { EmployeeProfessionalCertificationDTO } from '../../Models/EmployeeProfessionalCertificationDTO ';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees: EmployeeDTO[] = [];
  selectedEmployee: EmployeeDTO | null = null;
  //employeeForm!: FormGroup;
  employeeImageUrl: SafeUrl | null = null;

   public employeeForm: FormGroup;

   public documentsForm: FormGroup;

  public idClient:number = 10001001;
  departments: DropDown[] = [];
  sections: any[] = [];
  designations: any[] = [];
  genders: any[] = [];
  religions: any[] = [];
  http: any;
  jobtyps: any[] = [];
  employeeTypes: any[] = [];
  weekoffs: any[] = [];
  MaritalStatus: any[] = [];

  employeeDocuments: EmployeeDocumentDTO [] = [];
  educations: EmployeeEducationInfoDTO [] = [];
  family: EmployeeFamilyInfoDTO  [] = [];
  professionalCertification: EmployeeProfessionalCertificationDTO [] = [];
  
  public employeeDto: EmployeeDTO;
  formBuilder: any;
  docitems: any[] = [];
  
  constructor(
    private employeeService: EmployeeService,
    private dropdownService: DropDownService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.employeeDto = new EmployeeDTO();
    this.employeeForm = this.initForm();
    this.documentsForm = this.AdddocumentForm();
  
  }

  ngOnInit(): void {
     //this.employeeDto = new EmployeeDTO();
    //this.employeeForm = this.initForm();
    this.loadEmployees();
    //this.loadDropDownList();
     
    this.getDepartments(this.idClient);
    this.getDesignation(this.idClient);
    this.getJobType(this.idClient);
    this.getGender(this.idClient);
    this.getEmployeeType(this.idClient);
    this.getReligion(this.idClient);
    this.getSection(this.idClient);
    this.getWeekOff(this.idClient);
    this.getWeekOff(this.idClient);
    this.getMaritalStatus(this.idClient);
   
  }

  initForm(): FormGroup {
    return this.fb.group({
      idClient: new FormControl(0),
      id: new FormControl(0),
      employeeName:[''] ,                  
      employeeNameBangla: [''], 
      fatherName:[''] , 
      motherName:[''] , 
      idReportingManager: [''], 
      idJobType:[''] , 
      idEmployeeType: [''],
      birthDate: '',
      joiningDate: '',
      idGender: [''],
      idReligion: [''],
      idDepartment: [''],
      idSection: [''],
      idDesignation: [''],
      hasOvertime: [''],
      hasAttendanceBonus: [''],
      idWeekOff: [''],
      nationalIdentificationNumber: [''],
      contactNo: [''],
      address: [''],
      presentAddress:[''],
      idMaritalStatus: [''],
      createdBy: ['admin'],
      isActive: [true],
      employeeDocuments: new FormArray([])
  });

}

  loadEmployees(): void {
    this.employeeService.getAllEmployees(this.idClient).subscribe(data => {
      this.employees = data;
      this.employeeForm.disable();
    });
  }

   loadDropDownList(): void {
     this.getDepartments(this.idClient);
     this.getDesignation(this.idClient);
     this.getJobType(this.idClient);
     this.getGender(this.idClient);
     this.getEmployeeType(this.idClient);
     this.getReligion(this.idClient);
     this.getSection(this.idClient);
     this.getWeekOff(this.idClient);
     this.getMaritalStatus(this.idClient);

    //   this.dropdownService.getDesignationDropdown(this.idClient).subscribe(data => {
    //   this.departments = data;

    // });
  }

  getDepartments(idClient:number): void {

    this.dropdownService.getDepartmentDropdown(idClient).subscribe({
      next: data => {
        this.departments = data;
        },
     
      
    });
  }

  getDesignation(idClient:number): void {
    this.dropdownService.getDesignationDropdown(idClient).subscribe({
      next: data => {
        this.designations = data;
      },

    });
  }

    getJobType(idClient:number): void {
    this.dropdownService.getJobTypeDropDown(idClient).subscribe({
      next: data => {
        this.jobtyps = data;
      },

    });

  }

    getGender(idClient:number): void {
    this.dropdownService.getGenderDropDown(idClient).subscribe({
      next: data => {
        this.genders = data;
      },

    });

  }

    getEmployeeType(idClient:number): void {
    this.dropdownService.getEmployueeTypesDropDown(idClient).subscribe({
      next: data => {
        this.employeeTypes = data;
      },

    });

  }


    getReligion(idClient:number): void {
    this.dropdownService.getReligionDropDown(idClient).subscribe({
      next: data => {
        this.religions = data;
      },

    });

  }

    getSection(idClient:number): void {
    this.dropdownService.getSectionDropDown(idClient).subscribe({
      next: data => {
        this.sections = data;
      },

    });

  }

    getWeekOff(idClient:number): void {
    this.dropdownService.getWeekOffDropDown(idClient).subscribe({
      next: data => {
        this.weekoffs = data;
      },

    });

  }
    getMaritalStatus(idClient:number): void {
    this.dropdownService.getMaritalStatusDropDown(idClient).subscribe({
      next: data => {
        this.MaritalStatus = data;
      },

    });

  }

clearForm() {

this.employeeForm.reset();
}
//   getDepartments(): void {
//   this.dropdownService.getDepartmentDropdown(this.idClient).subscribe(
//     data => {
//       console.log('ID:', this.idClient);
//       this.departments = data;
//       console.log('DATA:', data);
//     },
//     error => {
//       console.error('Error fetching departments:', error);
//     }
//   );
// }


  loadEmployeeToForm(emp: EmployeeDTO): void {
    this.selectedEmployee = emp;
    console.log('Fetching employee by ID:', emp.id);

    this.employeeService.getEmployeeById(this.idClient, emp.id).subscribe({
      next: (data) => {

        const employeeData = data as unknown as EmployeeDTO;
        this.employeeForm.patchValue({
          idClient: employeeData.idClient,
          id: employeeData.id,
          employeeName: employeeData.employeeName,
          employeeNameBangla: employeeData.employeeNameBangla,
          fatherName: employeeData.fatherName,
          motherName: employeeData.motherName,
          idReportingManager: data.idReportingManager,
          idJobType: data.idJobType,
          idEmployeeType: data.idEmployeeType,
          birthDate: this.formatDateToInput(data.birthDate),
          joiningDate: this.formatDateToInput(data.joiningDate),
          idGender: data.idGender,
          idReligion: data.idReligion,
          idDepartment: data.idDepartment,
          idSection: data.idSection,
          idDesignation: data.idDesignation,
          hasOvertime: data.hasOvertime ?? false,
          hasAttendanceBonus: data.hasAttendenceBonus ?? false,  
          idWeekOff: data.idWeekOff,
          nationalIdentificationNumber: data.nationalIdentificationNumber,
          contactNo: data.contactNo,
          address: data.address,
          presentAddress:data.presentAddress,
          idMaritalStatus: data.idMaritalStatus,
          createdBy: data.createdBy,
          isActive: data.isActive ?? true,
        });

      this.employeeDocuments = employeeData.employeeDocuments ?? [];
      this.educations = employeeData.employeeEducationInfos ?? [];
      this.family = employeeData.employeeFamilyInfos ?? [];
      this.professionalCertification = employeeData.employeeProfessionalCertifications ?? [];

      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      }
    });

  }

 loadEmployeeImageToForm(emp: EmployeeDTO): void {
  this.selectedEmployee = emp;

  this.employeeService.getEmployeeImage(this.idClient, emp.id).subscribe({
    next: (blob: Blob) => {
      const objectURL = URL.createObjectURL(blob);

      this.employeeImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    },
    error: (error) => {
      console.error('Error fetching employee image:', error);
    }
  });
}

formatDateToInput(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    const offset = d.getTimezoneOffset();
    const localDate = new Date(d.getTime() - offset * 60000);
    return localDate.toISOString().split('T')[0]; 
}

// addDocument():void{
//   this.docitems.push(this.AdddocumentForm());
//   this.docitems = this.documentsForm.get('employeeDocuments') as FormArray;  
// }

AdddocumentForm(): FormGroup {
    return this.fb.group({
      documentName: '',
      fileName: '',
      uploadedFileExtention: ''
    });
  }
}
