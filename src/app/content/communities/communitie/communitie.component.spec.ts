import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitieComponent } from './communitie.component';

describe('CommunitieComponent', () => {
  let component: CommunitieComponent;
  let fixture: ComponentFixture<CommunitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
