import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';
import { CreateParticipantsComponent } from './pages/create-participants/create-participants.component';
import { EventsDetailViewComponent } from './pages/events-detail-view/events-detail-view.component';
import { ParticipantsDetailViewComponent } from './pages/participants-detail-view/participants-detail-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'participants',
    component: ParticipantsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'create-events',
    component: CreateEventsComponent,
  },
  {
    path: 'create-participants',
    component: CreateParticipantsComponent,
  },
  {
    path: 'events/:id',
    component: EventsDetailViewComponent,
  },
  {
    path: 'participants/:id',
    component: ParticipantsDetailViewComponent,
  },
];
