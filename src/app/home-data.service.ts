import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private dataURL='http://localhost:9091/home/alldata';
  constructor(private httpClient: HttpClient) { }
  
  getData(){
    return this.httpClient.get(this.dataURL)
  }

}
