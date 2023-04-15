import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3aComponent } from './level3a.component';

describe('Level3aComponent', () => {
  let component: Level3aComponent;
  let fixture: ComponentFixture<Level3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level3aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
