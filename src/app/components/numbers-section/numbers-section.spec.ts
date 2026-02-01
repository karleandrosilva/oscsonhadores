import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersSection } from './numbers-section';

describe('NumbersSection', () => {
  let component: NumbersSection;
  let fixture: ComponentFixture<NumbersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
