export interface EventsType {
  id: number;
  eventName: string;
  date: Date;
  venue: string;
  organizer: string;
}

export interface CreateEvents{
  eventName: string;
  date: Date;
  venue: string;
  organizer: string;
}
