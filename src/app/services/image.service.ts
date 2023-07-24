import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { image } from '../models/image';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  path = 'https://localhost:7277/api/';

  constructor(private httpclient: HttpClient,private sanitizer:DomSanitizer) { }

  getimagesbypcid(productId:number): Observable<image[]> {
    return this.httpclient.get<image[]>(this.path + 'Images/getimagesbypcid/'+ productId);
  }
}
