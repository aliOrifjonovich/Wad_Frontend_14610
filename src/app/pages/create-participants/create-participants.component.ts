import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { EventsType } from '../../Interfaces/EventsType';
import { ParticipantsService } from '../../services/particpants.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-participants',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-participants.component.html',
  styleUrl: './create-participants.component.scss'
})
export class CreateParticipantsComponent {
  router = inject(Router)
  eventsService = inject(EventsService)
  route = inject(ActivatedRoute)
  participantService = inject(ParticipantsService)
  participants: ParticipantsService[]=[]
  events: EventsType[]=[]
  participantsId: number = 0


 

  participantsForm = new FormGroup({
    attendeeName: new FormControl(''),
    email: new FormControl(''),
    ticketType: new FormControl(''),
    eventId: new FormControl('')
  })

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if(params.get('participantsId')) {
        const id: number = Number(params.get('participantsId'))
        this.participantsId = id
        this.participantService.getEvents(id).subscribe((item: any) => {
          this.participantsForm = new FormGroup({
            attendeeName: new FormControl(item.attendeeName),
            email: new FormControl(item.email),
            ticketType: new FormControl(item.ticketType),
            eventId: new FormControl(item.eventId)
          });
        });
      }
      this.eventsService.getItems().subscribe((result) => {
        this.events = result
      });
    });

  }

  onSubmit() {
    if (this.participantsId) {
      this.participantService.updateParticipants(this.participantsId, {id: this.participantsId, ...this.participantsForm.value}).subscribe(_ => {
        this.router.navigateByUrl("participants");
      });
    } else {
      this.participantService.createParticipants(this.participantsForm.value).subscribe(_=>{
        this.router.navigateByUrl("participants")
      })
    }
  
  }
}
