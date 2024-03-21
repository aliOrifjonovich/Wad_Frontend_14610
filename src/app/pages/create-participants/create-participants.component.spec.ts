import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantsComponent } from './create-participants.component';

describe('CreateParticipantsComponent', () => {
  let component: CreateParticipantsComponent;
  let fixture: ComponentFixture<CreateParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateParticipantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
