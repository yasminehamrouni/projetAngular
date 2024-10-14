import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapDSI23Component } from './face-snap-dsi23.component';

describe('FaceSnapDSI23Component', () => {
  let component: FaceSnapDSI23Component;
  let fixture: ComponentFixture<FaceSnapDSI23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapDSI23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapDSI23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
