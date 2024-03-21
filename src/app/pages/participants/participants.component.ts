import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ParticipantsType } from '../../Interfaces/Participants';
import { TableComponent } from '../../components/Table/table.component';
import { ParticipantsService } from '../../services/particpants.service';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';

@Component({
  selector: 'app-participants',
  standalone: true,
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss',
  imports: [TableComponent],
})
export class ParticipantsComponent {
  participantsItems: ParticipantsType[] = [];

  constructor(private participantService: ParticipantsService) {}

  ngOnInit(): void {
    this.participantService.getItems().subscribe((item) => {
      this.participantsItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Participants',
      key: 'attendeeName',
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Ticket Type',
      key: 'ticketType',
    },
  ];
}
