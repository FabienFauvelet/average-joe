import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface CustomerAgendaElement{
  id:string;
  name:string;
  startDate:Date;
  endDate:Date;
  teacherFirstname:string;
  teacherLastname:string;
}
interface TeacherAgendaElement{
  id:string;
  name:string;
  startDate:Date;
  endDate:Date;
  resources:string[];
  customers:string[];
}
interface ResourceAgendaElement{
  id:string;
  name:string;
  startDate:Date;
  endDate:Date;
  teacher:string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaService {


  constructor(private http: HttpClient) { }
  getCustomerCoursesList(customerId : string, startDate:Date, endDate:Date) : Observable<CustomerAgendaElement[]> {
    return this.http.get<CustomerAgendaElement[]>("/query/customers-slots" +
      "?id="+customerId+"&start="+this.toApiDate(startDate)+"&end="+this.toApiDate(endDate));
    /*return of([
      {id:"1", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,0,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,0,12,0)},
      {id:"2", type:"Musculation",
        startDateTime:  this.generateDateForWeekView(startDate,1,15,0),
        endDateTime:    this.generateDateForWeekView(startDate,1,16,0)},
      {id:"3", type:"Zumba",
        startDateTime:  this.generateDateForWeekView(startDate,2,17,0),
        endDateTime:    this.generateDateForWeekView(startDate,2,17,45)},
      {id:"4", type:"Abdos/Fessiers",
        startDateTime:  this.generateDateForWeekView(startDate,2,14,0),
        endDateTime:    this.generateDateForWeekView(startDate,2,14,30)},
      {id:"5", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,5,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,5,12,0)},
    ]);*/
  }
  private toApiDate(date:Date):string{
    return date.toISOString().split('.')[0];
  }
  getResourceCoursesList(id: string, startDate:Date, endDate:Date) : Observable<ResourceAgendaElement[]>{
    return this.http.get<ResourceAgendaElement[]>("/query/resources-slots" +
      "?id="+id+"&start="+this.toApiDate(startDate)+"&end="+this.toApiDate(endDate));
    /*return of([
      {id:"1", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,0,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,0,12,0)},
      {id:"2", type:"Musculation",
        startDateTime:  this.generateDateForWeekView(startDate,1,15,0),
        endDateTime:    this.generateDateForWeekView(startDate,1,16,0)},
      {id:"3", type:"Zumba",
        startDateTime:  this.generateDateForWeekView(startDate,3,12,0),
        endDateTime:    this.generateDateForWeekView(startDate,3,12,45)},
      {id:"4", type:"Abdos/Fessiers",
        startDateTime:  this.generateDateForWeekView(startDate,2,14,0),
        endDateTime:    this.generateDateForWeekView(startDate,2,14,30)},
      {id:"5", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,5,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,5,12,0)},
    ]);*/
  }

  getTeacherCoursesList(teacherId: string, startDate:Date, endDate:Date) :Observable<TeacherAgendaElement[]>{
    return this.http.get<TeacherAgendaElement[]>("/query/teacher-slots" +
      "?id="+teacherId+"&start="+this.toApiDate(startDate)+"&end="+this.toApiDate(endDate));
    /*return of([
      {id:"1", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,4,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,4,12,0)},
      {id:"2", type:"Musculation",
        startDateTime:  this.generateDateForWeekView(startDate,4,15,0),
        endDateTime:    this.generateDateForWeekView(startDate,4,16,0)},
      {id:"3", type:"Zumba",
        startDateTime:  this.generateDateForWeekView(startDate,2,17,0),
        endDateTime:    this.generateDateForWeekView(startDate,2,17,45)},
      {id:"4", type:"Abdos/Fessiers",
        startDateTime:  this.generateDateForWeekView(startDate,2,14,0),
        endDateTime:    this.generateDateForWeekView(startDate,2,14,30)},
      {id:"5", type:"Fitness",
        startDateTime:  this.generateDateForWeekView(startDate,5,11,0),
        endDateTime:    this.generateDateForWeekView(startDate,5,12,0)},
    ]);*/
  }
  generateDateForWeekView(startDate:Date, daysToAdd:number, hours:number , minutes:number) : Date{
    let date = new Date(startDate);
    date.setDate(date.getDate()+daysToAdd);
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  }

}
