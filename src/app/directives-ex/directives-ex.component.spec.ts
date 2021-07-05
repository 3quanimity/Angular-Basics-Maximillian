import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExComponent } from './directives-ex.component';

describe('DirectivesExComponent', () => {
  let component: DirectivesExComponent;
  let fixture: ComponentFixture<DirectivesExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});