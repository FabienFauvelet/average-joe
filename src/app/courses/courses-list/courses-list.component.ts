import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course} from "../models/course";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit{

  courses: Course[]=[];
  displayEditModal: boolean = false;
  courseToEdit: Course | undefined;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.coursesService.getCoursesList().subscribe(
      value => this.courses = value
    );
  }


  editCourse(course: Course) {
    this.courseToEdit = course;
    this.displayEditModal=true;
  }

  deleteCourse(course: Course) {

  }
}
