import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pc } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  path = 'https://localhost:7277/api/';

  constructor(private httpclient: HttpClient) { }

  getPcs(): Observable<pc[]> {
    return this.httpclient.get<pc[]>(this.path + 'Pcs/getall');
  }
}
