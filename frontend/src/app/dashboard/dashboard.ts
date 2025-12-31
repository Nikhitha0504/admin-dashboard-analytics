import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadLineChart();
    this.loadPieChart();
  }

  loadLineChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12000, 19000, 15000, 22000, 30000],
          borderColor: 'blue',
          fill: false
        }]
      }
    });
  }

  loadPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Active Users', 'Inactive Users'],
        datasets: [{
          data: [850, 350],
          backgroundColor: ['green', 'gray']
        }]
      }
    });
  }
}
