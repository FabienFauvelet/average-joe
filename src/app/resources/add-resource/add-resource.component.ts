import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ResourcesService} from "../services/resources.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.less']
})
export class AddResourceComponent {
  form= this.fb.group({name:['',Validators.required]});

  constructor(private fb: FormBuilder, private resourceService : ResourcesService, private messageService:MessageService,
              private router: Router) {
  }

  submitForm($event: SubmitEvent) {
  this.resourceService.addResource(
    {name:this.form.get('name')?.value}
  ).subscribe({
    next: (value) => {
      this.router.navigate(['/ressources/modifier']);
    },
    error: (error) =>{
      this.messageService.add({
        severity: 'error',
        summary: 'Une erreur est survenue',
        detail: 'Erreur lors de l\'appel au service de création d\'une ressource :' + error.status + ' ' + error.statusText
      })}
  });
  }
}
