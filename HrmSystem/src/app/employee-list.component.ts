import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '../Services/Employee.service'
import { EmployeeDTO } from '../app/Models/EmployeeDTO' // Import the Comment interface

@Component({
selector: 'app-comment-list',
templateUrl: '',
styleUrls: [''],
})
export class EmployeeListComponent implements OnInit {
employees: EmployeeDTO[] = [];

constructor(private EmployeeService: EmployeeService) {}

ngOnInit(): void {
this.EmployeeService.get().subscribe((EmployeeDTO) => {
this.employees employees;
});
}
}