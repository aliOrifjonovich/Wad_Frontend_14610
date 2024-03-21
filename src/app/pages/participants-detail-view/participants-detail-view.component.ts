import { Component, inject } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventsType } from '../../Interfaces/EventsType';
import { ActivatedRoute } from '@angular/router';
import { ParticipantsType } from '../../Interfaces/Participants';
import { ParticipantsService } from '../../services/particpants.service';

@Component({
  selector: 'app-participants-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './participants-detail-view.component.html',
  styleUrl: './participants-detail-view.component.scss'
})
export class ParticipantsDetailViewComponent {
  participantsService = inject(ParticipantsService)
  participantsDetail: ParticipantsType = {
  id: 0,
  attendeeName: '',
  email: '',
  ticketType: "",
  eventId: 0,
  eventManagement: {
    id: 0,
    eventName: '',
    date: '',
    venue: '',
    organizer: ''
  }
}

  route = inject(ActivatedRoute)
  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Get the ID from the route params

    this.participantsService.getEvents(id).subscribe((item: ParticipantsType) => {
      this.participantsDetail = item;
    });
  }
}
