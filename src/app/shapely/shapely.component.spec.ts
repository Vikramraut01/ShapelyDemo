import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapelyComponent } from './shapely.component';

describe('ShapelyComponent', () => {
  let component: ShapelyComponent;
  let fixture: ComponentFixture<ShapelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
