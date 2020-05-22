import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipeLinaresComponent } from './felipe-linares.component';

describe('FelipeLinaresComponent', () => {
  let component: FelipeLinaresComponent;
  let fixture: ComponentFixture<FelipeLinaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelipeLinaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelipeLinaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
