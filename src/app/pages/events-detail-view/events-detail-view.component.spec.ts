import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailViewComponent } from './events-detail-view.component';

describe('EventsDetailViewComponent', () => {
  let component: EventsDetailViewComponent;
  let fixture: ComponentFixture<EventsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
