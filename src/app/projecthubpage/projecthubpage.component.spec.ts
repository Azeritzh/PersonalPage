import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecthubpageComponent } from './projecthubpage.component';

describe('ProjecthubpageComponent', () => {
  let component: ProjecthubpageComponent;
  let fixture: ComponentFixture<ProjecthubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecthubpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecthubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
