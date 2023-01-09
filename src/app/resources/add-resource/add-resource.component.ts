import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.less']
})
export class AddResourceComponent {
  form= this.fb.group({name:[undefined,Validators.required]});

  constructor(private fb: FormBuilder) {
  }

  submitForm($event: SubmitEvent) {

  }
}
