import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectworkprocesspageComponent } from './projectworkprocesspage.component';

describe('ProjectworkprocesspageComponent', () => {
  let component: ProjectworkprocesspageComponent;
  let fixture: ComponentFixture<ProjectworkprocesspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectworkprocesspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectworkprocesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
