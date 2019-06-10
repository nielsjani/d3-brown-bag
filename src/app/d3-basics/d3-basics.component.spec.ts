import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BasicsComponent } from './d3-basics.component';

describe('D3BasicsComponent', () => {
  let component: D3BasicsComponent;
  let fixture: ComponentFixture<D3BasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
