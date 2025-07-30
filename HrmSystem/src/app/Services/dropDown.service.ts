import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { EmployeeDTO } from '../Models/EmployeeDTO';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  private apiUrl = 'https://localhost:7135/api/common'; 

  constructor(private http: HttpClient) {}


  getDepartmentDropdown(idClient: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/common/departmentdropdown?idClient=${idClient}`)
  }

}
