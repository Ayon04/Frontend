import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../../Models/EmployeeDTO';
import { EmployeeService } from '../../Services/employee.service';
import { DropDownService } from '../../Services/dropDown.service';

import { RouterModule } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';

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
  // employeeForm!: FormGroup;

   public employeeForm: FormGroup;

  idClient = 10001001;
  departments: any[] = [];
  sections: any[] = [];
  designations: any[] = [];
  genders: any[] = [];
  religions: any[] = [];
  http: any;
  
  public employeeDto: EmployeeDTO;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.employeeDto = new EmployeeDTO();
this.employeeForm = this.initForm();
  }

  ngOnInit(): void {
     //this.employeeDto = new EmployeeDTO();
    //this.employeeForm = this.initForm();
    this.loadEmployees();
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
      birthDate: [''],
      joiningDate: [''],
      idGender: [''],
      idReligion: [''],
      idDepartment: [''],
      idSection: [''],
      idDesignation: [''],
      hasOvertime: [false],
      hasAttendanceBonus: [false],
      idWeekOff: [''],
      nationalIdentificationNumber: [''],
      contactNo: [''],
      address: [''],
      presentAddress:[''],
      idMaritalStatus: [''],
      createdBy: ['admin'],
      isActive: [true]
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees(this.idClient).subscribe(data => {
      this.employees = data;
    });
  }

   loadDropDownList(): void {
    this.DropDownService.getDepartmentDropdown(this.idClient).subscribe(data => {
      this.deptDropDown = data;
    });
  }
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
          birthDate: data.birthDate ? new Date(data.birthDate) : null,
          joiningDate: data.joiningDate ? new Date(data.joiningDate) : null,
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
          isActive: data.isActive ?? true
        });

      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
      }
    });

  }

}