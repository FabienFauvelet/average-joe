import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CalendarOptions, EventClickArg} from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {AgendaService} from "./agenda.service";
import {MessageService} from "primeng/api";
import {CustomersService} from "../customers/services/customers.service";
import {TeachersService} from "../teachers/services/teachers.service";
import {ResourcesService} from "../resources/services/resources.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.less']
})
export class AgendaComponent implements OnInit {
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent | undefined;

  constructor(private route: ActivatedRoute, private agendaService: AgendaService, private messageService: MessageService,
              private customersService: CustomersService, private teachersService: TeachersService, private resourcesService : ResourcesService ) {
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
    views:{timeGridWeek:{dayHeaderFormat: {hour12: false},scrollTime: '08:00:00'}},
    locale: 'fr',
    eventSources: [this.fetchEvents.bind(this)],
    eventClick : this.eventClick.bind(this)
  };
  events: any[] = [];
  diplayedCourse: any;
  diplayePopUp: boolean = false;
  objects: any[]= [];
  selectedObjectId: any;


  ngOnInit() {
    this.typeAgenda = this.route.snapshot.url[0].path;
    switch (this.typeAgenda) {
      case 'client': {
        this.customersService.getCustomersList().subscribe(
          value => this.objects=value.map(item => ({id:item.id, label:item.firstname+' '+item.lastname}))
        );
        break;
      }
      case 'ressource': {
        this.resourcesService.getResourcesList().subscribe(
          value => this.objects=value.map(item => ({id:item.id, label:item.name}))
        );
        break;
      }
      case 'professeur': {
        this.teachersService.getTeachersList().subscribe(
          value => this.objects=value.map(item => ({id:item.id, label:item.firstname+' '+item.lastname}))
        );
        break;
      }
    }
  }
  eventClick(eventClickArg : EventClickArg){
    console.log(eventClickArg.event.id);
    this.diplayedCourse = this.events.find(value => value.id===eventClickArg.event.id)
    console.log(this.diplayedCourse);
    this.diplayePopUp = true;

  }
  fetchEvents(info: any, successCallback: any, failureCallback: any) {
    console.log("plip");
    switch (this.typeAgenda) {
      case 'client': {
        return this.agendaService.getCustomerCoursesList(this.selectedObjectId, info.start, info.end).subscribe({
          next: (value) => {
            this.events = value;
            successCallback(value.map(
              toMap => ({id: toMap.id, title: 'Cours de ' + toMap.name, start: toMap.startDate, end: toMap.endDate})
            ))
          },error: (error) => this.messageService.add({
            severity: 'error',
            summary: 'Une erreur est survenue',
            detail: 'Erreur lors de l\'appel au service de récupération des agendas :' + error.status + ' ' + error.statusText
          })
        });
      }
      case 'ressource': {
        return this.agendaService.getResourceCoursesList(this.selectedObjectId, info.start, info.end).subscribe(
          value => {
            this.events=value;
            successCallback(value.map(
              toMap => ({id:toMap.id,title: 'Cours de ' + toMap.name, start: toMap.startDate, end: toMap.endDate})
            ))
          }
        );
      }
      case 'professeur': {
        return this.agendaService.getTeacherCoursesList(this.selectedObjectId, info.start, info.end).subscribe(
          value => {
            this.events=value;
            successCallback(value.map(
              toMap => ({id:toMap.id,title: 'Cours de ' + toMap.name, start: toMap.startDate, end: toMap.endDate})
            ))
          }
        );
      }
      default:
        return [];
    }
  }

  loadEvent(event: any) {
    this.selectedObjectId=event.value;
    this.fullcalendar?.getApi().refetchEvents();
  }
}
