import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chart: any = [];
  constructor() { }

  ngOnInit(): void {
    const data = {
      labels: [
        'Ingresos',
        'Egresos'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [30000000, 5000000],
        backgroundColor: [
          //'rgba(93,175,89,0.5)',
          '#d41e27',
          '#000000'
        ],
        hoverOffset: 4
      }]
    };
    this.chart = new Chart('pie', {
      type: 'pie',
      data:  data,
      options: {
        responsive: true,

    }
    })
  }

}
