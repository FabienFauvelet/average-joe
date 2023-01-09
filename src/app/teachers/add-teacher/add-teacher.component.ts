import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.less']
})
export class AddTeacherComponent {
  form= this.fb.group({
    firstName: [undefined, Validators.required],
    lastName: [undefined, Validators.required]
  });
  constructor(private fb: FormBuilder) {
  }
  submitForm($event: SubmitEvent) {

  }
}
