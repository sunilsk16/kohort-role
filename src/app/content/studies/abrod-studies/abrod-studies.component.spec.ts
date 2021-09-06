import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrodStudiesComponent } from './abrod-studies.component';

describe('AbrodStudiesComponent', () => {
  let component: AbrodStudiesComponent;
  let fixture: ComponentFixture<AbrodStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrodStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrodStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
