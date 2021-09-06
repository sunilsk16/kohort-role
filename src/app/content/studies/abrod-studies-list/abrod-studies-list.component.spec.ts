import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrodStudiesListComponent } from './abrod-studies-list.component';

describe('AbrodStudiesListComponent', () => {
  let component: AbrodStudiesListComponent;
  let fixture: ComponentFixture<AbrodStudiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrodStudiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrodStudiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
