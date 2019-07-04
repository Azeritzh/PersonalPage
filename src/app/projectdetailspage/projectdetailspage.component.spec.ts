import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailspageComponent } from './projectdetailspage.component';

describe('ProjectdetailspageComponent', () => {
  let component: ProjectdetailspageComponent;
  let fixture: ComponentFixture<ProjectdetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
