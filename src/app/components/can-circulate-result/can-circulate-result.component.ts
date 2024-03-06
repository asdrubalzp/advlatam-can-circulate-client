import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
@Component({
  selector: 'app-can-circulate-result',
  templateUrl: './can-circulate-result.component.html',
  styleUrls: ['./can-circulate-result.component.css'],
})
export class CanCirculateResultComponent {
  @Input() vehicle: Vehicle = {
    plate: '',
    engine: '',
    chassis: '',
    yearVehicle: 0,
    brand: '',
    model: '',
    typeVehicle: '',
    ownerId: '',
    canCirculate: false,
  };

  @Input() notFoundVehicle: boolean = false;
}
