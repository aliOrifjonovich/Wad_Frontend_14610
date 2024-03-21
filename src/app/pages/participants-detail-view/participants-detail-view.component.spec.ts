import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsDetailViewComponent } from './participants-detail-view.component';

describe('ParticipantsDetailViewComponent', () => {
  let component: ParticipantsDetailViewComponent;
  let fixture: ComponentFixture<ParticipantsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantsDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
