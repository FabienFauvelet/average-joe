import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Resource {
  id:string;
  name:string;
}
interface CreateResourceCommand {
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getResourcesList() : Observable<Resource[]>{
    return this.http.get<Resource[]>("/query/resources");
    /*return of([
      {id:"bcb4c68e-28bc-462f-a6d1-26a2f7e789c7", name:"Haltères"}
    ]);*/
  }
  addResource(createResourceCommand : CreateResourceCommand) : Observable<any> {
    return this.http.post<any>("/command/resources", createResourceCommand);
  }

  deleteResource(id:string) : Observable<any> {
    return this.http.delete<any>("/command/resources/"+id);
  }
}
