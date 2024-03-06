import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-page-can-circulate',
  templateUrl: './page-can-circulate.component.html',
  styleUrls: ['./page-can-circulate.component.css'],
})
export class PageCanCirculateComponent {
  showResults: boolean = false;
  vehicle = {} as Vehicle;
  notFoundVehicle: boolean = false;

  setVehicle(event: any) {
    this.vehicle = event;
  }

  setShowResults(event: boolean) {
    this.showResults = event;
  }

  setNotFoundVehicle(event: boolean) {
    this.showResults = true;
    this.notFoundVehicle = event;
  }
}
