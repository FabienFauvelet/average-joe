import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CalendarOptions, EventClickArg} from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {AgendaService} from "./agenda.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.less']
})
export class AgendaComponent implements OnInit {
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent | undefined;
  agendaService: AgendaService;

  constructor(private route: ActivatedRoute, agendaService: AgendaService) {
    this.agendaService = agendaService;
  }

  typeAgenda: string = "";
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek listWeek'
    },
    nowIndicator: true,
    firstDay: 1,
    slotMinTime: '07:00:00', slotMaxTime: '21:00:00',
    contentHeight: 'auto',
    weekText: 'test',
    buttonText: {today: 'Aujourd\'hui', month: 'Mois', week: 'Semaine', list: 'Liste'},
    dayHeaderFormat: {hour12: false,},
    locale: 'fr',
    eventSources: [this.fetchEvents.bind(this)],
    scrollTime: '08:00:00',
    eventClick : this.eventClick.bind(this)
  };
  events: any[] = [];
  diplayedCourse: any;
  diplayePopUp: boolean = false;


  ngOnInit() {
    this.typeAgenda = this.route.snapshot.url[0].path;
  }
  eventClick(eventClickArg : EventClickArg){
    console.log(eventClickArg.event.id);
    this.diplayedCourse = this.events.find(value => value.id===eventClickArg.event.id)
    console.log(this.diplayedCourse);
    this.diplayePopUp = true;

  }
  fetchEvents(info: any, successCallback: any, failureCallback: any) {
    switch (this.typeAgenda) {
      case 'client': {
        return this.agendaService.getCustomerCoursesList("fakeid", info.start, info.end).subscribe(
          value => {
            this.events=value;
            successCallback(value.map(
              toMap => ({id:toMap.id,title: 'Cours de ' + toMap.type, start: toMap.startDateTime, end: toMap.endDateTime})
            ))
          }
        );
      }
      case 'ressource': {
        return this.agendaService.getResourceCoursesList("fakeid", info.start, info.end).subscribe(
          value => {
            this.events=value;
            successCallback(value.map(
              toMap => ({id:toMap.id,title: 'Cours de ' + toMap.type, start: toMap.startDateTime, end: toMap.endDateTime})
            ))
          }
        );
      }
      case 'professeur': {
        return this.agendaService.getTeacherCoursesList("fakeid", info.start, info.end).subscribe(
          value => {
            this.events=value;
            successCallback(value.map(
              toMap => ({id:toMap.id,title: 'Cours de ' + toMap.type, start: toMap.startDateTime, end: toMap.endDateTime})
            ))
          }
        );
      }
      default:
        return [];
    }
  }
}
