import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCoursesList() : Observable<Course[]> {
    return of([
      {id:"1", type:"Fitness", startDateTime:new Date('2023-01-05T11:00:00'), endDateTime:new Date('2023-01-05T12:00:00')},
      {id:"2", type:"Musculation", startDateTime:new Date('2023-01-08T16:00:00'), endDateTime:new Date('2023-01-08T17:00:00')},
      {id:"3", type:"Zumba", startDateTime:new Date('2023-01-20T10:00:00'), endDateTime:new Date('2023-01-20T10:45:00')},
      {id:"4", type:"Abdos/Fessiers", startDateTime:new Date('2023-01-24T18:00:00'), endDateTime:new Date('2023-01-24T18:45:00')},
      {id:"5", type:"Fitness", startDateTime:new Date('2023-01-30T11:00:00'), endDateTime:new Date('2023-01-30T12:00:00')}
    ]);
  }

}
