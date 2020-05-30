import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsDefaultComponent } from './ws-default.component';

describe('WsDefaultComponent', () => {
  let component: WsDefaultComponent;
  let fixture: ComponentFixture<WsDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
