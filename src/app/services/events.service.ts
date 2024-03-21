import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateEvents, EventsType } from '../Interfaces/EventsType';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiurl = 'https://localhost:7293/api';
  constructor(private http: HttpClient) {}

  getItems(): Observable<EventsType[]> {
    return this.http.get<EventsType[]>(this.apiurl + "/EventManagements");
  }

  getEvents(id: number){
    return this.http.get<EventsType>(`${this.apiurl}/EventManagements/${id}`);
  };

  deleteEvents(id:number){
    return this.http.delete(`${this.apiurl}/EventManagements/${id}`);
    
  };

  createEvents(participants: any){
    return this.http.post<CreateEvents>(`${this.apiurl}/EventManagements`, participants);
  };
  updateEvents(id: number, events: any){
    return this.http.put(`${this.apiurl}/EventManagements/${id}`, events);  
  };

}
