import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Course} from "../models/course";
import {CoursesService} from "../services/courses.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../../customers/services/customers.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.less']
})
export class UpdateCourseComponent implements OnInit,OnChanges{
  @Input()
  course: Course | undefined;
  form: FormGroup | undefined;
  teachers: any;
  resources: any;
  customers: any[]=[];
  filteredCustomers : any;

  constructor(private courseService: CoursesService, private fb: FormBuilder,private customerService: CustomersService,
              private messageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {
    this.courseService.getTeacherList().subscribe(value => {
        console.log(value);
        this.teachers = value.map(
          teacher => {return {id: teacher.id,label:teacher.firstname+' '+teacher.lastname}}
        );
      }
    );
    this.courseService.getResourceList().subscribe(resources => {this.resources=resources.map(resource => {return {id:resource.id,label:resource.name}});});
    this.customerService.getCustomersList().subscribe(customers => this.customers=customers);
  }

  submitForm($event: SubmitEvent) {
    if(this.form) {
      let localReservedResources: string[] = [];
      let participants: string[] = [];
      if(this.form.get('reservedResources')?.value) {
        this.form.get('reservedResources')?.value.forEach((value: string | null) => {
          if (value != null) localReservedResources.push(value as string)
        });
      }
      if(this.form.get('participants')?.value) {
        this.form.get('participants')?.value.forEach((value: { id: string; } | null) => {
          if (value != null) participants.push(value.id)
        });
      }
      this.courseService.updateCourse({
        id:this.course?.id,
        startDateTime: this.form.get('startDateTime')?.value,
        endDateTime: this.form.get('endDateTime')?.value,
        nbMaxParticipant: this.form.get('nbMaxParticipant')?.value,
        teacherId: this.form.get('teacherId')?.value,
        reservedResources: localReservedResources.length > 0 ? localReservedResources : null,
        participants: participants.length > 0 ? participants : null,
        type:this.form.get('type')?.value,
      }).subscribe({
          next: (value) => {
            window.location.reload();
          },
          error: (error) =>{
            this.messageService.add({
              severity: 'error',
              summary: 'Une erreur est survenue',
              detail: 'Erreur lors de l\'appel au service de création d\'un client :' + error.status + ' ' + error.statusText
            })}
        }
      );
    }
  }

  onStartDateChange($event: any) {

  }

  get reservedResources() {
    return this.form?.get('reservedResources') as FormArray;
  }
  get participants() {
    return this.form?.get('participants') as FormArray;
  }
  addParticipant() {
    this.participants.push(this.fb.control(undefined,Validators.required));
  }
  deleteParticipant(index:number) {
    this.participants.removeAt(index);
  }
  addResource() {
    this.reservedResources.push(this.fb.control(undefined,Validators.required));
  }
  deleteResource(index:number) {
    this.reservedResources.removeAt(index);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form= this.fb.group({
      startDateTime : [this.course?.startDate,Validators.required],
      endDateTime : [this.course?.endDate,Validators.required],
      teacherId : [this.course?.teacherId,Validators.required],
      type : [this.course?.type,Validators.required],
      reservedResources : this.fb.array(
        this.course?.resources?.map(value => [value,null])||[]
      ),
      nbMaxParticipant : [this.course?.nbMaxParticipant,Validators.required],
      participants : this.fb.array(this.course?.customers.map(value => [this.customers.find(customer => customer.id==value),null])||[])
    });
    console.log(this.course);
  }


  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.customers.length; i++) {
      let customer = this.customers[i];
      if (customer.firstname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(customer);
      }
    }

    this.filteredCustomers = filtered;
  }
}
