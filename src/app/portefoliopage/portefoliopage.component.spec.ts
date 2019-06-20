import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefoliopageComponent } from './portefoliopage.component';

describe('PortefoliopageComponent', () => {
  let component: PortefoliopageComponent;
  let fixture: ComponentFixture<PortefoliopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefoliopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefoliopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
