import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsService } from '../../services/events.service';
import { EventsType } from '../../Interfaces/EventsType';
import { ParticipantsService } from '../../services/particpants.service';
import { Router } from '@angular/router';


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
  participantService = inject(ParticipantsService)
  participants: ParticipantsService[]=[]
  events: EventsType[]=[]


  ngOnInit() {
    this.eventsService.getItems().subscribe((result) => {
      this.events = result
    });
  }

  participantsForm = new FormGroup({
    attendeeName: new FormControl(''),
    email: new FormControl(''),
    ticketType: new FormControl(''),
    eventId: new FormControl('')
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.participantsForm.value);
    this.participantService.createParticipants(this.participantsForm.value).subscribe(_=>{
      this.router.navigateByUrl("participants")
    })
  }
}
