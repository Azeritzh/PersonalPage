import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectgallerypageComponent } from './projectgallerypage.component';

describe('ProjectgallerypageComponent', () => {
  let component: ProjectgallerypageComponent;
  let fixture: ComponentFixture<ProjectgallerypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectgallerypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectgallerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
