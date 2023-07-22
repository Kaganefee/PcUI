import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  path = 'https://localhost:7277/api/';

  constructor(private httpclient: HttpClient) { }

  getimages(): Observable<image[]> {
    return this.httpclient.get<image[]>(this.path + 'Images/getall');
  }
}
