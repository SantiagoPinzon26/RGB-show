import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RgbInput } from './rgb-input';

describe('RgbInput', () => {
  let component: RgbInput;
  let fixture: ComponentFixture<RgbInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbInput],
    }).compileComponents();

    fixture = TestBed.createComponent(RgbInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
