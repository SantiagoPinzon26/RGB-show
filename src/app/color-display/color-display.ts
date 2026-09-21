import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-display',
  imports: [],
  templateUrl: './color-display.html',
  styleUrl: './color-display.css'
})
export class ColorDisplay {

  @Input() r: number = 0;
  @Input() g: number = 0;
  @Input() b: number = 0;

  get color(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  get gris(): number {
    return Math.round((this.r + this.g + this.b) / 3);
  }

  get colorGris(): string {
    return `rgb(${this.gris}, ${this.gris}, ${this.gris})`;
  }
}