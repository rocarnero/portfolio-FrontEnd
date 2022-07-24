import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRowComponent } from './experience-row.component';

describe('ExperienceRowComponent', () => {
  let component: ExperienceRowComponent;
  let fixture: ComponentFixture<ExperienceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
