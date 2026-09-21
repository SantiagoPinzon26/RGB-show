import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rgb-input',
  imports: [FormsModule],
  templateUrl: './rgb-input.html',
  styleUrl: './rgb-input.css'
})
export class RgbInput {

  @Input() r: number = 0;
  @Input() g: number = 0;
  @Input() b: number = 0;

  @Output() rgbChange = new EventEmitter<{
    r: number,
    g: number,
    b: number
  }>();

  valorColor: string = '';

  aplicarColor() {

    let valor = this.valorColor.trim();

    // RGB: 255,0,0
    if (valor.includes(',')) {

      let partes = valor.split(',');

      if (partes.length !== 3) {
        alert('Escribe el RGB así: 255,0,0');
        return;
      }

      let r = Number(partes[0].trim());
      let g = Number(partes[1].trim());
      let b = Number(partes[2].trim());

      if (
        isNaN(r) || isNaN(g) || isNaN(b) ||
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255
      ) {
        alert('Los valores RGB deben estar entre 0 y 255');
        return;
      }

      this.r = r;
      this.g = g;
      this.b = b;

      this.emitirCambio();
      return;
    }

    // Hexadecimal: FF0000 o #FF0000
    let hex = valor;

    if (hex.startsWith('#')) {
      hex = hex.substring(1);
    }

    if (hex.length !== 6) {
      alert('El hexadecimal debe tener 6 caracteres');
      return;
    }

    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
      alert('Hexadecimal inválido');
      return;
    }

    this.r = parseInt(hex.substring(0, 2), 16);
    this.g = parseInt(hex.substring(2, 4), 16);
    this.b = parseInt(hex.substring(4, 6), 16);

    this.emitirCambio();
  }

 cambiarR() {
  if (this.r > 255) {
    this.r = 255;
  }

  if (this.r < 0) {
    this.r = 0;
  }

  this.actualizarColor();
  this.emitirCambio();
}

cambiarG() {
  if (this.g > 255) {
    this.g = 255;
  }

  if (this.g < 0) {
    this.g = 0;
  }

  this.actualizarColor();
  this.emitirCambio();
}

cambiarB() {
  if (this.b > 255) {
    this.b = 255;
  }

  if (this.b < 0) {
    this.b = 0;
  }

  this.actualizarColor();
  this.emitirCambio();
}

private actualizarColor() {
  this.valorColor = `${this.r},${this.g},${this.b}`;
}

  private emitirCambio() {
    this.rgbChange.emit({
      r: this.r,
      g: this.g,
      b: this.b
    });
  }
}