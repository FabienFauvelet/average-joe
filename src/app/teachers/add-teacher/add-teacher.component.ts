import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TeachersService} from "../services/teachers.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.less']
})
export class AddTeacherComponent {
  form= this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private teacherService: TeachersService, private messageService:MessageService,
              private router: Router) {
  }
  submitForm($event: SubmitEvent) {
    this.teacherService.addTeacher(
      {firstName:this.form.get('firstName')?.value,lastName:this.form.get('lastName')?.value}
    ).subscribe({
      next: (value) => {
        this.router.navigate(['/professeurs/modifier']);
      },
      error: (error) =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: 'Erreur lors de l\'appel au service de création d\'un professeur :' + error.status + ' ' + error.statusText
        })}
    });
  }
}
