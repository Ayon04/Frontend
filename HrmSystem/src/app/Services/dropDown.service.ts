import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDown } from '../Models/DropDown';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  // private api = 'https://localhost:7135/api/common'; 
  private api = environment.apiBaseUrl

  constructor(private http: HttpClient) {}

  getDepartmentDropdown(idClient: number): Observable<any> {
    return this.http.get<DropDown>(`${this.api}/common/departmentdropdown/?idClient=${idClient}`)
  }

  getDesignationDropdown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/designationdropdown/?idClient=${idClient}`)
  }


   getJobTypeDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/jobtypesdropdown/?idClient=${idClient}`)
  }

   getGenderDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/gendersdropdown/?idClient=${idClient}`)
  }

   getEmployueeTypesDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/employeetypesdropdown/?idClient=${idClient}`)
  }

   getReligionDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/religionsdropdown/?idClient=${idClient}`)
  }

  getSectionDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/sectionsdropdown/?idClient=${idClient}`)
  }
  
  getWeekOffDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/weekoffsdropdown/?idClient=${idClient}`)
  }
  
   getMaritalStatusDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/maritalstatusesdropdown/?idClient=${idClient}`)
  }

  getEducationLevelDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/educationlevel/?idClient=${idClient}`)
  }

  getEducationexaminationDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/educationexamination/?idClient=${idClient}`)
  }

  getEducationResultDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/educationresult/?idClient=${idClient}`)
  }

   getRelationshipdownDropDown(idClient: number): Observable<any> {
    return this.http.get<any>(`${this.api}/common/relationshipdropdown/?idClient=${idClient}`)
  }
}





