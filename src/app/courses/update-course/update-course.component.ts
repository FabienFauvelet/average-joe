import {Component, Input} from '@angular/core';
import {Course} from "../models/course";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.less']
})
export class UpdateCourseComponent {
  @Input()
  course: Course | undefined;
}
