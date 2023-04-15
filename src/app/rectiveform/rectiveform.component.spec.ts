import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveformComponent } from './rectiveform.component';

describe('RectiveformComponent', () => {
  let component: RectiveformComponent;
  let fixture: ComponentFixture<RectiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
