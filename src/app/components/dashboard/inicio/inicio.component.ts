import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ingresosBox1: number = 1000000;
  ingresosBox2: number = 50000;
  ingresosBox3: number = 30000;
  gastosBox1: number = 45000;
  gastosBox2: number = 200040;
  gastosBox3: number = 5837211;
  citasBox1: number = 8;
  citasBox2: number = 9;
  citasBox3: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
