import {Component, OnInit} from '@angular/core';
import {TeachersService} from "../services/teachers.service";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.less']
})
export class TeachersListComponent implements OnInit{
  teachers: any[]=[];

  constructor(private teachersService:TeachersService) {
  }

  ngOnInit(): void {
    this.teachersService.getTeachersList().subscribe(
      value => this.teachers=value
    );
  }

  editTeacher(teacher: any) {

  }

  deleteTeacher(teacher: any, rowIndex: any) {
    this.teachersService.deleteTeacher(teacher.id).subscribe(
      value => this.teachers.splice(rowIndex,1)
    );
  }
}
