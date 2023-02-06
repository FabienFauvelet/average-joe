import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Teacher {
  id:string;
  firstname:string;
  lastname:string;
}
interface CreateTeacherCommand {
  firstName?:string|null;
  lastName?:string|null;
}

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  getTeachersList() : Observable<Teacher[]> {
    return this.http.get<Teacher[]>("/query/teachers");
    /*return of([
      {id:"bcb4c68e-28bc-462f-a6d1-26a2f7e789c7", firstName:"John", lastName:"Doe"}
    ]);*/
  }
  addTeacher(createTeacherCommand : CreateTeacherCommand) : Observable<any>{
    return this.http.post<any>("/command/teachers", createTeacherCommand);
  }

  deleteTeacher(id:string) : Observable<any>{
    return this.http.delete<any>("/command/teachers/"+id);
  }
}
