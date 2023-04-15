import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingComponent } from './formatting.component';

describe('FormattingComponent', () => {
  let component: FormattingComponent;
  let fixture: ComponentFixture<FormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
