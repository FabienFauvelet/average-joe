import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../services/resources.service";

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.less']
})
export class ResourcesListComponent implements OnInit{
  resources: any;

  constructor(private resourcesService : ResourcesService) {
  }

  ngOnInit(): void {
    this.resourcesService.getResourcesList().subscribe(
      value => this.resources=value
    );
  }
  editResource(resource: any) {

  }

  deleteResource(resource: any) {

  }


}
