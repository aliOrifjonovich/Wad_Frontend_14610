import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsType } from '../../Interfaces/EventsType';

@Component({
  selector: 'app-create-events',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-events.component.html',
  styleUrl: './create-events.component.scss'
})
export class CreateEventsComponent {
  @Input()
  eventsDetail!: EventsType;

  eventId: number = 0

  router = inject(Router)
  eventsService = inject(EventsService)
  route = inject(ActivatedRoute)

  eventsForm = new FormGroup({
    eventName: new FormControl(''),
    organizer: new FormControl(''),
    venue: new FormControl(''),
    date: new FormControl('')
  })

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(params.get('eventsId')) {
        const id: number = Number(params.get('eventsId'))
        this.eventId = id
        this.eventsService.getEvents(id).subscribe((item: any) => {
          this.eventsForm = new FormGroup({
            eventName: new FormControl(item.eventName),
            organizer: new FormControl(item.organizer),
            venue: new FormControl(item.venue),
            date: new FormControl(item.date)
          });
        });
      }
    });

  }

  onSubmit() {

    if (this.eventId) {
      this.eventsService.updateEvents(this.eventId, {id: this.eventId, ...this.eventsForm.value}).subscribe(_ => {
        this.router.navigateByUrl("events");
      });
    } else {
      this.eventsService.createEvents(this.eventsForm.value).subscribe(_ => {
        this.router.navigateByUrl("events");
      });
    }
    // TODO: Use EventEmitter with form value
    console.log(this.eventsForm.value);
  }
}
