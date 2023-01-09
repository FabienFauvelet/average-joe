import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Teacher {
  id:string;
  firstName:string;
  lastName:string;
}
interface CreateTeacherCommand {
  firstName:string;
  lastName:string;
}

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  getTeachersList() : Observable<Teacher[]> {
    return of([
      {id:"bcb4c68e-28bc-462f-a6d1-26a2f7e789c7", firstName:"John", lastName:"Doe"}
    ]);
  }
  addTeacher(createTeacherCommand : CreateTeacherCommand) : Observable<any>{
    return this.http.post<any>("http://localhost:4200/teachers", createTeacherCommand);
  }
}
