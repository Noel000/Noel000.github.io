import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPublicComponent } from './llista-public.component';

describe('LlistaPublicComponent', () => {
  let component: LlistaPublicComponent;
  let fixture: ComponentFixture<LlistaPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
