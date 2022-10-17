import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void {
    switch (this.tengo) {
      case 'USD':

        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84;
        } else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.75;
        } else {
          console.log("Error");
        }

        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.20;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        } else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.9;
        } else {
          console.log("Error");
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.33;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.11;
        } else if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        } else {
          console.log("Error");
        }
        break;
    }
  }

}
