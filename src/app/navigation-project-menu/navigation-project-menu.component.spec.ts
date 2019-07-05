import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProjectMenuComponent } from './navigation-project-menu.component';

describe('NavigationProjectMenuComponent', () => {
  let component: NavigationProjectMenuComponent;
  let fixture: ComponentFixture<NavigationProjectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProjectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProjectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
