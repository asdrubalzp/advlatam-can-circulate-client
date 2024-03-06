import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CanCirculate } from '../models/can-circulate.model';
import { Vehicle } from '../models/vehicle.model';
import { formatDateToLocaleString } from '../utils/formatDateToLocaleString';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private resourceName = 'vehicles';
  private url = environment.API_URL + '/' + this.resourceName;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  canCirculate(canCirculate: CanCirculate): Observable<Vehicle> {
    let params = new HttpParams();
    params = params.set('plate', canCirculate.plate!);
    params = params.set(
      'circulationDateTime',
      formatDateToLocaleString(canCirculate.circulationDateTime!)
    );

    return this.http.get<Vehicle>(this.url + '/can-circulate', { params });
  }
}
