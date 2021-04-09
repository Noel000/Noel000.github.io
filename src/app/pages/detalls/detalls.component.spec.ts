import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallsComponent } from './detalls.component';

describe('DetallsComponent', () => {
  let component: DetallsComponent;
  let fixture: ComponentFixture<DetallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
