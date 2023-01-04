import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resultado!: number
  nu1!: number
  nu2!: number
  opcion!: string

  sumar(n1: string, n2: string) {
    this.nu1 = Number(n1)
    this.nu2 = Number(n2)
    this.resultado = this.nu1 + this.nu2
  }
  restar(n1: string, n2: string) {
    this.nu1 = Number(n1)
    this.nu2 = Number(n2)
    this.resultado = this.nu1 - this.nu2
  }
  multiplicacion(n1: string, n2: string) {
    this.nu1 = Number(n1)
    this.nu2 = Number(n2)
    this.resultado = this.nu1 * this.nu2
  }
  division(n1: string, n2: string) {
    this.nu1 = Number(n1)
    this.nu2 = Number(n2)
    this.resultado = this.nu1 / this.nu2
  }

}
