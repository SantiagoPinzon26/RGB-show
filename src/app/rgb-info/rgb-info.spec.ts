import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RgbInfo } from './rgb-info';

describe('RgbInfo', () => {
  let component: RgbInfo;
  let fixture: ComponentFixture<RgbInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(RgbInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
