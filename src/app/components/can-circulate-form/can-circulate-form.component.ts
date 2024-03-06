import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { CanCirculate } from 'src/app/models/can-circulate.model';
import { Vehicle } from 'src/app/models/vehicle.model';
@Component({
  selector: 'app-can-circulate-form',
  templateUrl: './can-circulate-form.component.html',
  styleUrls: ['./can-circulate-form.component.css'],
})
export class CanCirculateFormComponent {
  @Output() showResults = new EventEmitter<boolean>(false);
  @Output() vehicleData = new EventEmitter<Vehicle>();
  @Output() notFoundVehicle = new EventEmitter<boolean>(false);

  minDate: Date = new Date();
  vehicle: Vehicle | null = null;

  canCirculate: CanCirculate = {
    plate: null,
    circulationDateTime: null,
  };

  constructor(private vehicleService: VehicleService) {}

  isAValidPlate(): Boolean {
    if (this.canCirculate.plate == null) {
      return true;
    }

    if (this.canCirculate.plate.length != 7) {
      return false;
    }

    return true;
  }

  isAValidDate(): Boolean {
    if (this.canCirculate.circulationDateTime == null) {
      return true;
    }

    if (this.canCirculate.circulationDateTime < new Date()) {
      return false;
    }

    return true;
  }

  validatePlate(canCirculate: CanCirculate) {
    this.vehicleService.canCirculate(canCirculate).subscribe({
      next: (response: Vehicle) => {
        this.vehicle = response;
        this.showResults.emit(true);
        this.vehicleData.emit(this.vehicle);
        this.notFoundVehicle.emit(false);
      },
      error: (error) => {
        if (error.status === 404) {
          this.notFoundVehicle.emit(true);
        } else {
          window.alert('Ocurrió un error inesperado. Intente nuevamente.');
        }
      },
    });
  }
}
