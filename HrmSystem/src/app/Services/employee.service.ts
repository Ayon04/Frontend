import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { EmployeeDTO } from '../Models/EmployeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:7135/api/employee'; 

  constructor(private http: HttpClient) {}


//   createEmployee(employee: EmployeeDTO): Observable<any> {
//   const formData = new FormData();

//   // Append scalar fields
// formData.append('IdClient', employee.idClient?.toString() || '0');
// formData.append('EmployeeName', employee.employeeName || '');
// formData.append('EmployeeNameBangla', employee.employeeNameBangla || '');
// formData.append('FatherName', employee.fatherName || '');
// formData.append('MotherName', employee.motherName || '');

// formData.append('IdDepartment', employee.idDepartment?.toString() || '0');
// formData.append('IdSection', employee.idSection?.toString() || '0');
// formData.append('IdDesignation', employee.idDesignation?.toString() || '');
// formData.append('IdGender', employee.idGender?.toString() || '');
// formData.append('IdReligion', employee.idReligion?.toString() || '');
// formData.append('IdJobType', employee.idJobType?.toString() || '');
// formData.append('IdEmployeeType', employee.idEmployeeType?.toString() || '');
// formData.append('IdMaritalStatus', employee.idMaritalStatus?.toString() || '');
// formData.append('IdWeekOff', employee.idWeekOff?.toString() || '');

// formData.append('HasOvertime', (employee.hasOvertime ?? false).toString());
// formData.append('hasAttendenceBonus', (employee.hasAttendenceBonus ?? false).toString());
// formData.append('isActive', (employee.isActive ?? true).toString());

// formData.append('Address', employee.address || '');
// formData.append('PresentAddress', employee.presentAddress || '');
// formData.append('NationalIdentificationNumber', employee.nationalIdentificationNumber || '');
// formData.append('ContactNo', employee.contactNo || '');
// formData.append('JoiningDate', employee.joiningDate?.toISOString() || '');
// formData.append('BirthDate', employee.birthDate?.toISOString() || '');


//   // Append file
//   if (employee.empImg) {
//     formData.append('EmpImg', employee.empImg, employee.empImg.name);
//   }

//   // Serialize and append lists
//   formData.append('EmployeeDocuments', JSON.stringify(employee.employeeDocuments));
//   formData.append('EmployeeEducationInfos', JSON.stringify(employee.employeeEducationInfos));
//   formData.append('EmployeeProfessionalCertifications', JSON.stringify(employee.employeeProfessionalCertifications));
//   formData.append('EmployeeFamilyInfos', JSON.stringify(employee.employeeFamilyInfos));

//   return this.http.post<any>(this.apiUrl, formData);
// }


  //private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

createEmployee(empployee: EmployeeDTO): Observable<any> {
    return this.http.post(this.apiUrl, empployee);
  }

updateEmployee(employee: EmployeeDTO): Observable<any> {
  return this.http.put(this.apiUrl, employee, {
    headers: { 'Content-Type': 'application/json' }
  });
}


deleteEmployee(idClient: number, id: number): Observable<any> {
  const url = `${this.apiUrl}/${idClient}/${id}`;
  return this.http.patch(url, null, {
  });
}

// deleteEmployee(idClient: number, id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${idClient}/${id}`);
//   }


getAllEmployees(idClient: number): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(`${this.apiUrl}/?idClient=${idClient}`)
      .pipe(
        catchError(this.handleError)
      );
  }

 getEmployeeById(idClient: number, id: number): Observable<any> {
  const params = new HttpParams()
  .set('Idclient', idClient.toString())
  .set('id', id.toString());

  return this.http.get<EmployeeDTO>(`${this.apiUrl}/getemployeebyid`, { params })
    .pipe(
      catchError(this.handleError)
    );
}


getEmployeeImage(idClient: number, id: number): Observable<Blob> {
  const params = new HttpParams()
    .set('Idclient', idClient.toString())
    .set('id', id.toString());

  return this.http.get(`${this.apiUrl}/employeeimage`, {
    params,
    responseType: 'blob'
  }).pipe(
    catchError(this.handleError)
  );
}
  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }

}
