import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatsComponent } from './floats.component';

describe('FloatsComponent', () => {
  let component: FloatsComponent;
  let fixture: ComponentFixture<FloatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
