import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  path = 'https://localhost:7277/api/';

  constructor(private httpclient: HttpClient) { }

  getcategories(): Observable<category[]> {
    return this.httpclient.get<category[]>(this.path + 'Categories/getall');
  }
}