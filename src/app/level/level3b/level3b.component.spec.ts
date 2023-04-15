import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3bComponent } from './level3b.component';

describe('Level3bComponent', () => {
  let component: Level3bComponent;
  let fixture: ComponentFixture<Level3bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level3bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
