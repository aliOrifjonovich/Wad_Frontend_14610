
export interface EventManagement {
  id: number;
  eventName: string;
  date: string; 
  venue: string;
  organizer: string;
}
export interface ParticipantsType {
  id: number;
  attendeeName: string;
  email: string;
  ticketType: string;
  eventId: number;
  eventManagement: EventManagement;
}

export interface CreateParticipants{
  attendeeName: string;
  email: string;
  ticketType: string;
  eventId: number;
}
