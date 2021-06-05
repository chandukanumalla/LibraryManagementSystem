import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksdashboardComponent } from './booksdashboard.component';

describe('BooksdashboardComponent', () => {
  let component: BooksdashboardComponent;
  let fixture: ComponentFixture<BooksdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
