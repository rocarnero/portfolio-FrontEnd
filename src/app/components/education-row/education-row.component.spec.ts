import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationRowComponent } from './education-row.component';

describe('EducationRowComponent', () => {
  let component: EducationRowComponent;
  let fixture: ComponentFixture<EducationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
