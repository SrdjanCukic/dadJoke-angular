import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenJokesComponent } from './seen-jokes.component';

describe('SeenJokesComponent', () => {
  let component: SeenJokesComponent;
  let fixture: ComponentFixture<SeenJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeenJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
