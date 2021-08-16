import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44342/api/products/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getByCategoryId(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getbycategoryid?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
