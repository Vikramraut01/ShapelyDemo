import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2bComponent } from './level2b.component';

describe('Level2bComponent', () => {
  let component: Level2bComponent;
  let fixture: ComponentFixture<Level2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
