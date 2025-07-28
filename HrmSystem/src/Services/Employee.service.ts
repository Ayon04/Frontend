import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../app/Models/EmployeeDTO'; // Import the Comment interface

@Injectable({
 providedIn: 'root',
})
export class EmployeeService {
 private baseUrl = 'https://localhost:7135/api/employee?idClient=10001001';

constructor(private http: HttpClient) {}

 
 getAllEmployees(idClient: number): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(`${this.baseUrl}/?idClient=${idClient}`);
  }
 }


