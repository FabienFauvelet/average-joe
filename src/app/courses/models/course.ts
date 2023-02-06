export interface Course {
  id : string;
  type: string;
  startDate: Date;
  endDate: Date;
  teacherId:string;
  resources:string[];
  customers:string[];
  nbMaxParticipant:number;
  teacherFirstName:string;
  teacherLastName:string;
}
