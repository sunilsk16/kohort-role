import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageaListComponent } from './languagea-list.component';

describe('LanguageaListComponent', () => {
  let component: LanguageaListComponent;
  let fixture: ComponentFixture<LanguageaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
