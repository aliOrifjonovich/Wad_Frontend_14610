import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateParticipants, ParticipantsType } from '../Interfaces/Participants';

@Injectable({
  providedIn: 'root',
})
export class ParticipantsService {
  private apiurl = 'https://localhost:7293/api';
  constructor(private http: HttpClient) {}
  getItems(): Observable<ParticipantsType[]> {
    return this.http.get<ParticipantsType[]>(this.apiurl + "/EventAttendees");
  }

  getEvents(id: number){
    return this.http.get<ParticipantsType>(`${this.apiurl}/EventAttendees/${id}`);
  };

  deleteParticipants(id:number){
    return this.http.delete(`${this.apiurl}/EventAttendees/${id}`);
  };

  createParticipants(participants: any){
    return this.http.post<CreateParticipants>(`${this.apiurl}/EventAttendees`, participants);
  };
}
