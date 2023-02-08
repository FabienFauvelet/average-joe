import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder,Validators} from "@angular/forms";
import {CoursesService} from "../services/courses.service";
import {AgendaService} from "../../agenda/agenda.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit{
  form= this.fb.group({
    startDateTime : [new Date(),Validators.required],
    endDateTime : [new Date(),Validators.required],
    teacherId : [undefined,Validators.required],
    reservedResources : this.fb.array([]),
    nbMaxParticipant : [0,Validators.required],
    type:['',Validators.required]
  });
  teachers: any[] = [];
  resources: any[] = [];
  constructor(private fb: FormBuilder, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.coursesService.getTeacherList().subscribe(value => {
        console.log(value);
        this.teachers = value.map(
          teacher => {return {id: teacher.id,label:teacher.firstname+' '+teacher.lastname}}
        );
      }
    );
    this.coursesService.getResourceList().subscribe(resources => {this.resources=resources.map(resource => {return {id:resource.id,label:resource.name}});});

  }
  get reservedResources() {
    return this.form.get('reservedResources') as FormArray;
  }
  addResource() {
    this.reservedResources.push(this.fb.control(undefined,Validators.required));
  }
  deleteResource(index:number) {
    this.reservedResources.removeAt(index);
  }
  onStartDateChange($event: Date) {
    let datetimeWithOffset : Date = new Date();
    datetimeWithOffset.setTime($event.getTime()+(3600*1000));
    this.form.controls['endDateTime'].setValue(datetimeWithOffset);
  }

  submitForm($event: SubmitEvent) {
    let localReservedResources : string[] = [];
    this.form.get('reservedResources')?.value.forEach(value => {if(value!=null)localReservedResources.push(value as string)});

    this.coursesService.addCourse({
      startDateTime :this.form.get('startDateTime')?.value,
      endDateTime:this.form.get('endDateTime')?.value,
      nbMaxParticipant:this.form.get('nbMaxParticipant')?.value,
      teacherId:this.form.get('teacherId')?.value,
      reservedResources:localReservedResources.length>0?localReservedResources:null,
      type: this.form.get('type')?.value,
    }).subscribe();
  }
}
