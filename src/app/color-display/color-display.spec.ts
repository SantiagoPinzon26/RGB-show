import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorDisplay } from './color-display';

describe('ColorDisplay', () => {
  let component: ColorDisplay;
  let fixture: ComponentFixture<ColorDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
