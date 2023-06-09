import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJokesComponent } from './search-jokes.component';

describe('SearchJokesComponent', () => {
  let component: SearchJokesComponent;
  let fixture: ComponentFixture<SearchJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
