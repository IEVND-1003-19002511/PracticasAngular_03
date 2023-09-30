import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})
export class PotenciasComponent {
  primerNumero: number=0;
  segundoNumero: number=0;
  resultados: number[] = [];
  sumaTotal: number = 0;

  calcularSuma() {
    this.resultados = [];
    this.sumaTotal = 0;

    if (this.primerNumero && this.segundoNumero && this.segundoNumero > 0) {
      for (let i = 1; i <= this.segundoNumero; i++) {
        this.resultados.push(this.primerNumero);
        this.sumaTotal += this.primerNumero;
      }
    }
  }

}
