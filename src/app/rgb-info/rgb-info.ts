import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rgb-info',
  imports: [],
  templateUrl: './rgb-info.html',
  styleUrl: './rgb-info.css'
})
export class RgbInfo {

  @Input() r: number = 0;
  @Input() g: number = 0;
  @Input() b: number = 0;

  get hexadecimal(): string {
    return '#' +
      this.r.toString(16).padStart(2, '0') +
      this.g.toString(16).padStart(2, '0') +
      this.b.toString(16).padStart(2, '0');
  }
}