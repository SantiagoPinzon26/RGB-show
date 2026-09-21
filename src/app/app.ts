import { Component } from '@angular/core';
import { RgbInput } from './rgb-input/rgb-input';
import { RgbInfo } from './rgb-info/rgb-info';
import { ColorDisplay } from './color-display/color-display';

@Component({
  selector: 'app-root',
  imports: [RgbInput, RgbInfo, ColorDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  r: number = 0;
  g: number = 0;
  b: number = 0;

  actualizarRGB(rgb: { r: number, g: number, b: number }) {
  this.r = rgb.r;
  this.g = rgb.g;
  this.b = rgb.b;
}
}