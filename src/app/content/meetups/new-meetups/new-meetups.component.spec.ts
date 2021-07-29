import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetupsComponent } from './new-meetups.component';

describe('NewMeetupsComponent', () => {
  let component: NewMeetupsComponent;
  let fixture: ComponentFixture<NewMeetupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMeetupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
