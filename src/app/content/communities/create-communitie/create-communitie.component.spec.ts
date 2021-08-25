import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommunitieComponent } from './create-communitie.component';

describe('CreateCommunitieComponent', () => {
  let component: CreateCommunitieComponent;
  let fixture: ComponentFixture<CreateCommunitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommunitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommunitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
