import { Injectable } from '@angular/core';
import {firstValueFrom, map, Observable, of} from 'rxjs';
import {Course} from "../models/course";
import {HttpClient} from "@angular/common/http";

interface CreateEventCommand {
  startDateTime?:Date | null;
  endDateTime?:Date | null;
  teacherId?:string | null;
  reservedResources?:string[] | null;
  nbMaxParticipant?:number | null;
}
interface UpdateEventCommand {
  id?:string|null;
  startDateTime?:Date | null;
  endDateTime?:Date | null;
  teacherId?:string | null;
  reservedResources?:string[] | null;
  nbMaxParticipant?:number | null;
  participants?:string[] | null;
}
interface Teacher {
  id:string;
  firstname:string;
  lastname:string;
}
interface Resource {
  id:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCoursesList() : Observable<Course[]> {
    return this.http.get<Course[]>("/query/courses/full")
      .pipe(
        map<Course[],Course[]>(
          courses => {
            courses.forEach(course => {
              course.startDate = new Date(course.startDate);
              course.endDate = new Date(course.endDate);
            });
            return courses;
          }
        )
      );

    /*return of([
      {id:"bcb4c68e-28bc-462f-a6d1-26a2f7e789c7", type:"Fitness", startDateTime:new Date('2023-01-05T11:00:00'), endDateTime:new Date('2023-01-05T12:00:00')},
      {id:"a54822ad-c2ef-46ab-92a4-780f800912c7", type:"Musculation", startDateTime:new Date('2023-01-08T16:00:00'), endDateTime:new Date('2023-01-08T17:00:00')},
      {id:"94c49961-210a-4c5f-8e17-66e6ef279651", type:"Zumba", startDateTime:new Date('2023-01-20T10:00:00'), endDateTime:new Date('2023-01-20T10:45:00')},
      {id:"d77662ba-8e38-4586-8795-91efbd8c759f", type:"Abdos/Fessiers", startDateTime:new Date('2023-01-24T18:00:00'), endDateTime:new Date('2023-01-24T18:45:00')},
      {id:"a0e4334f-026f-4cf3-84b6-69efb23ec630", type:"Fitness", startDateTime:new Date('2023-01-30T11:00:00'), endDateTime:new Date('2023-01-30T12:00:00')}
    ]);*/
  }
  getTeacherList() : Observable<Teacher[]> {
    return this.http.get<Teacher[]>("/query/teachers");
    /*return of([
      {id:'0f381bb0-4a93-44bd-895b-02698fb4197e',firstName:'Benjamin',lastName:'Lenoir'},
      {id:'aea89c96-db66-4fda-96ab-44f69dda6879',firstName:'Noël',lastName:'Breton'},
      {id:'08cc7658-cc16-426b-b0a6-4804cfe9a334',firstName:'Fabien',lastName:'Mathieu'},
      {id:'17feac09-7bb7-4287-8947-959d619a8b26',firstName:'Eric',lastName:'Nibaudeau'}]
    );*/
  }
  getResourceList() : Observable<Resource[]> {
    return this.http.get<Resource[]>("/query/resources");
    /*return of([
      {id:'767d67a6-d5aa-46e6-a7be-5cc0cca3edae',name:'Haltères'},
      {id:'1f47738e-77f3-4936-9f48-49b487be98f8',name:'Ballon yoga'},
      {id:'7f315f04-e685-455d-b19a-a1c5ead57045',name:'Poids'},
      {id:'43b01792-d6db-4746-b9c2-faa67c518d76',name:'Cerceau'}]
    );*/
  }
  addCourse(body: CreateEventCommand) : Observable<any> {
    return this.http.post<any>("/command/events", body);
  }

  deleteCourse(id: string) {
    return this.http.delete<any>("/command/events/"+id);
  }

  updateCourse(body : UpdateEventCommand) {
    return this.http.put<any>("/command/events", body);
  }
}
