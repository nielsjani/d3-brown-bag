import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBasicsComponent } from './svg-basics.component';

describe('SvgBasicsComponent', () => {
  let component: SvgBasicsComponent;
  let fixture: ComponentFixture<SvgBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
