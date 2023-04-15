import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2aComponent } from './level2a.component';

describe('Level2aComponent', () => {
  let component: Level2aComponent;
  let fixture: ComponentFixture<Level2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
